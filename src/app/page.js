
import Home from "./pages/Home";
import Hotjar from "@hotjar/browser";
import { GoogleAnalytics } from '@next/third-parties/google'
// export const metadata = {
//   title: "Hav'dor",

//   description: "Experience precision-engineered doors with durability, aesthetics, and performance.",
//   keywords: [
//     "Hav'dor",
//     "Premium Doors",
//     "Designer Doors",
//     "Moisture Resistant Doors",
//     "Termite Proof Doors",
//     "Luxury Door Manufacturer"
//   ],

//   openGraph: {
//     title: "Hav'dor | Premium & Durable Designer Doors",
//     description:
//       "Every Hav'dor door is engineered for lasting strength, sound insulation, and contemporary aesthetics. Discover the modern standard in door technology.",
//     url: "https://yourdomain.com",
//     siteName: "Hav'dor",
//     images: [
//       {
//         url: "/asset/favicon.png", // use your logo or preview image here
//         width: 800,
//         height: 600,
//         alt: "Hav'dor Doors",
//       },
//     ],
//     type: "website",
//   },

//   alternates: {
//     canonical: "https://yourdomain.com/",
//   },

//   icons: {
//     icon: "/asset/favicon.png",         // Favicon for all browsers
//     shortcut: "/asset/favicon.png",     // Shortcut icon for legacy support
//     apple: "/asset/favicon.png",        // iOS home screen
//     other: {
//       rel: "apple-touch-icon-precomposed",
//       url: "/asset/favicon.png",
//     },
//   },
// };

export default function Main() {




  return (
    <main className="relative">
      <Home />

    </main>
  );
}
