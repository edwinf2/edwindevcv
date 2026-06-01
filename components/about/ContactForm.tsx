"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { sendContact } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  _gotcha: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-transparent px-3 py-2 text-sm transition-colors focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200/60 dark:border-zinc-800 dark:focus:border-zinc-600 dark:focus:ring-zinc-800/60";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  async function onSubmit(values: FormValues) {
    setStatus({ kind: "submitting" });
    const result = await sendContact(values);
    if (result.ok) {
      setStatus({ kind: "success" });
      reset();
      return;
    }
    const message =
      result.error === "rateLimit" ? t("errorRateLimit") : t("error");
    setStatus({ kind: "error", message });
  }

  const isSubmitting = status.kind === "submitting";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-4"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0"
        {...register("_gotcha")}
      />

      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-medium"
        >
          {t("name")}
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder={t("namePlaceholder")}
          aria-invalid={!!errors.name}
          className={inputClass}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t("errorRequired")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-medium"
        >
          {t("email")}
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={!!errors.email}
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t("errorEmail")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium"
        >
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          rows={6}
          placeholder={t("messagePlaceholder")}
          aria-invalid={!!errors.message}
          className={cn(inputClass, "resize-y")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t("errorTooShort")}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </button>
        {status.kind === "success" && (
          <p
            role="status"
            className="text-sm text-emerald-700 dark:text-emerald-400"
          >
            {t("success")}
          </p>
        )}
        {status.kind === "error" && (
          <p
            role="alert"
            className="text-sm text-red-600 dark:text-red-400"
          >
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
