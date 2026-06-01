"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  _gotcha: z.string().optional(),
});

export type ContactInput = z.infer<typeof schema>;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: "validation" | "rateLimit" | "server" };

async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return h.get("x-real-ip") ?? "unknown";
}

export async function sendContact(
  input: ContactInput,
): Promise<ContactResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "validation" };

  // Honeypot: bots fill hidden fields. Treat as silent success so they don't
  // probe for the real error.
  if (parsed.data._gotcha) return { ok: true };

  const ip = await getClientIp();
  if (!rateLimit(`contact:${ip}`)) {
    return { ok: false, error: "rateLimit" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars",
    );
    return { ok: false, error: "server" };
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return { ok: false, error: "server" };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return { ok: false, error: "server" };
  }
}
