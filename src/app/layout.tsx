import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalhive.co.il"),
  title: "DigitalHive - סוכנות דיגיטל מובילה",
  description: "בניית אתרים, שיווק דיגיטלי, מיתוג ועיצוב. DigitalHive - הופכים את העסק שלך לדיגיטלי.",
  keywords: ["סוכנות דיגיטל", "בניית אתרים", "שיווק דיגיטלי", "SEO", "עיצוב אתרים", "קידום אתרים"],
  authors: [{ name: "DigitalHive" }],
  creator: "DigitalHive",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://digitalhive.co.il",
    siteName: "DigitalHive",
    title: "DigitalHive - סוכנות דיגיטל מובילה",
    description: "בניית אתרים, שיווק דיגיטלי, מיתוג ועיצוב. DigitalHive - הופכים את העסק שלך לדיגיטלי.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DigitalHive - סוכנות דיגיטל מובילה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalHive - סוכנות דיגיטל מובילה",
    description: "בניית אתרים, שיווק דיגיטלי, מיתוג ועיצוב. DigitalHive - הופכים את העסק שלך לדיגיטלי.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
