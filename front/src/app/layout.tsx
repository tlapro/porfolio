import type { Metadata } from "next";
import { Roboto, Merriweather, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import IsDarkMode from "@/components/isDark/IsDarkMode";
import BackgroundText from "@/components/backgroundText/BackgroundText";

const roboto = Roboto({
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-roboto", 
});

const merriweather = Merriweather({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const robotoMono = Roboto_Mono({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Tomas Laprovitta",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${roboto.variable} ${merriweather.variable} antialiased`}
      >
        <BackgroundText />
        <IsDarkMode>
          <NavBar />
          <div className="relative z-10 mt-6">{children}</div>
          <Footer />
        </IsDarkMode>
      </body>
    </html>
  );
}
