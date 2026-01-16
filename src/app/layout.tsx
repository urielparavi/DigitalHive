import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalHive - סוכנות דיגיטל מובילה",
    description: "בניית אתרים, שיווק דיגיטלי, מיתוג ועיצוב. DigitalHive - הופכים את העסק שלך לדיגיטלי.",
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
    <html lang="he" dir="rtl" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
