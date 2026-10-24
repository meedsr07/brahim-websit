import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script"; // 1. استيراد مكون Script
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { rootMetadata } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = rootMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e7",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ca-ES"
      dir="ltr"
      className={`${manrope.variable} ${fraunces.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* 2. إضافة كود Google Ads داخل الـ <head> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18527649467"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18527649467');
          `}
        </Script>
      </head>
      <body className="min-h-full">
        <a
          href="#contenido"
          className="sr-only rounded-sm bg-ink px-4 py-3 text-sm font-bold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Vés al contingut
        </a>

        <div className="flex min-h-dvh flex-col">
          <Header />
          <main id="contenido" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <StickyContact />
        </div>

        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}