
import Home from "./pages/Home";
import Hotjar from "@hotjar/browser";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Home - Balaji AirVent",
  description: "Discover Balaji AirVent's comprehensive HVAC solutions including AirVentilation systems, industrial air handling equipment, and premium air conditioning solutions. Leading manufacturer with expert engineering and reliable service.",
  keywords: [
    "HVAC Solutions India",
    "AirVentilation Systems",
    "Industrial Air Handling",
    "Commercial HVAC",
    "Residential Air Conditioning",
    "Ventilation Equipment",
    "Air Quality Solutions",
    "HVAC Manufacturing",
    "Balaji AirVent Home"
  ],
  openGraph: {
    title: "Balaji AirVent | Premium HVAC Solutions & AirVentilation Systems",
    description: "Discover Balaji AirVent's comprehensive HVAC solutions including AirVentilation systems, industrial air handling equipment, and premium air conditioning solutions.",
    url: "https://balajiairvent.com",
    siteName: "Balaji AirVent",
    images: [
      {
        url: "/asset/favicon_balaji.png",
        width: 1200,
        height: 630,
        alt: "Balaji AirVent - Premium HVAC Solutions Home",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://balajiairvent.com/",
  },
};

export default function Main() {




  return (
    <main className="relative">
      <Home />

    </main>
  );
}
