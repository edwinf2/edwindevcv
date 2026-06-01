import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const SITE_NAME = "Edwin Figueroa";
const SITE_HANDLE = "edwinfigueroa.dev";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? SITE_NAME).slice(0, 120);
  const description = (searchParams.get("description") ?? "").slice(0, 200);
  const eyebrow = (searchParams.get("eyebrow") ?? SITE_NAME).slice(0, 60);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b0b12 0%, #15151c 55%, #16244f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "4px",
              borderRadius: "2px",
              background:
                "linear-gradient(90deg, #4f7cff 0%, #38bdf8 100%)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: "#9d9fa9",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? 64 : 76,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 48,
            color: "white",
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: 32,
              color: "#9d9fa9",
              lineHeight: 1.4,
              marginTop: 32,
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "1040px",
            }}
          >
            {description}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#70727d",
          }}
        >
          <div style={{ display: "flex" }}>{SITE_HANDLE}</div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                display: "flex",
              }}
            />
            <div style={{ display: "flex" }}>
              Senior Full-Stack Engineer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
