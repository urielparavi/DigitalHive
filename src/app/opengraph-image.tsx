import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "DigitalHive - סוכנות דיגיטל מובילה";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34, 197, 94, 0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(56, 189, 248, 0.2) 0%, transparent 50%)",
          padding: "40px",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Logo hexagon - smaller */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="80" height="80" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a5f" />
                  <stop offset="50%" stopColor="#0f2744" />
                  <stop offset="100%" stopColor="#0a1929" />
                </linearGradient>
                <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <path
                d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z"
                fill="url(#logoGrad)"
                stroke="url(#strokeGrad)"
                strokeWidth="1.5"
              />
              <path
                d="M16 8L10 12V20L16 24L22 20V12L16 8Z"
                fill="none"
                stroke="url(#strokeGrad)"
                strokeWidth="1"
                opacity="0.7"
              />
              <circle cx="16" cy="16" r="3" fill="url(#strokeGrad)" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #22c55e 0%, #38bdf8 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              DigitalHive
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              direction: "rtl",
            }}
          >
            סוכנות דיגיטל מובילה | בונים נוכחות דיגיטלית
          </div>

          {/* Services badges - smaller */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 16,
              direction: "rtl",
            }}
          >
            {["בניית אתרים", "שיווק דיגיטלי", "מיתוג ועיצוב"].map((service) => (
              <div
                key={service}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  borderRadius: 9999,
                  color: "#22c55e",
                  fontSize: 16,
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          www.digitalhive.co.il
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
