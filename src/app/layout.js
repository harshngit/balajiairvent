import { Inter } from "next/font/google";
import "./globals.css";
import Hotjar from "@hotjar/browser";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balaji Airvent",

  // description: "Experience precision-engineered doors with durability, aesthetics, and performance.",
  // keywords: [
  //   "Hav'dor",
  //   "Premium Doors",
  //   "Designer Doors",
  //   "Moisture Resistant Doors",
  //   "Termite Proof Doors",
  //   "Luxury Door Manufacturer"
  // ],

  // openGraph: {
  //   title: "Hav'dor | Premium & Durable Designer Doors",
  //   description:
  //     "Every Hav'dor door is engineered for lasting strength, sound insulation, and contemporary aesthetics. Discover the modern standard in door technology.",
  //   url: "https://havdor.com/",
  //   siteName: "Hav'dor",
  //   images: [
  //     {
  //       url: "/asset/favicon.png", // use your logo or preview image here
  //       width: 800,
  //       height: 600,
  //       alt: "Hav'dor Doors",
  //     },
  //   ],
  //   type: "website",
  // },

  // alternates: {
  //   canonical: "https://havdor.com/",
  // },

  // icons: {
  //   icon: "/asset/favicon.png",         // Favicon for all browsers
  //   shortcut: "/asset/favicon.png",     // Shortcut icon for legacy support
  //   apple: "/asset/favicon.png",        // iOS home screen
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/asset/favicon.png",
  //   },
  // },
};


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      {/* <Script id="HotJarAnalytics" >
      {
        `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5292476,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      
     </Script>
    

      <link rel="icon" href="./favicon.png" sizes="any" />
      <link
  rel="apple-touch-icon"
  href="./favicon.png"
  type="image/png"
  sizes="any"
    /> */}
      <body className={inter.className}>{children}</body>

    </html>
  );
}
