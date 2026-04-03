import type { Metadata } from "next";
import { Oswald, Didact_Gothic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ContentLines from "@/components/ContentLines";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const didactGothic = Didact_Gothic({
  variable: "--font-didact",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karadenizinşaatvegayrimankul.com"),
  title: {
    default: "Karadeniz İnşaat ",
    template: "%s | Karadeniz İnşaat",
  },
  keywords: [
    "Karadeniz İnşaat",
    "Houston general contractor",
    "structural steel erection",
    "pre-engineered metal buildings",
    "construction consulting",
    "PEMB erection",
    "Houston construction company",
    "steel erection Texas",
  ],
  authors: [{ name: "Karadeniz İnşaat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karadenizinşaatvegayrimankul.com",
    siteName: "Karadeniz İnşaat",
    title: "Karadeniz İnşaat ",
    images: [
      {
        url: "/images/services/Modolith-Image-108.jpg",
        width: 1200,
        height: 630,
        alt: "Karadeniz İnşaat - Steel Erection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karadeniz İnşaat | Houston General Contractor",
    description:
      "Standing Structures. Setting Standards. Expert construction services in Houston, TX.",
    images: ["/images/services/Modolith-Image-108.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Karadeniz İnşaat",
  url: "https://karadenizinsaatvegayrimenkul.com",
  logo: "https://modolith.com/images/logos/Modolith-Structures.webp",
  image: "https://modolith.com/images/services/Modolith-Image-108.jpg",
  telephone: "+90 535 490 57 28",
  email: "info@karadenizinsaatvegayrimenkul.com",
  foundingDate: "2009",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Güngören, Tolgahan Sk. No:1 ofis 25, 34788 Çekmeköy/İstanbul",
    addressLocality: "İstanbul",
    addressRegion: "TX",
    postalCode: "77019",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/p/Modolith-LLC-100090859106290/",
    "https://www.instagram.com/modolith_structures/",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Pazartesi",
      "Sal",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${didactGothic.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="content-wrapper">
          <ContentLines />
          <main id="main-content">{children}</main>
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
