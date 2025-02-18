import type { Metadata } from "next";
import { Roboto, Merriweather, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import IsDarkMode from "@/components/isDark/IsDarkMode";

const roboto = Roboto({
  weight: "400", // Peso de la fuente
  subsets: ["latin"], // Subconjunto de caracteres (opcional, pero recomendable)
  variable: "--font-roboto", // Nombre de la variable CSS
});

const merriweather = Merriweather({
  weight: "700", // Peso de la fuente
  subsets: ["latin"], // Subconjunto de caracteres
  variable: "--font-merriweather", // Nombre de la variable CSS
});

const robotoMono = Roboto_Mono({
  weight: "400", // Puedes ajustar el peso según sea necesario
  subsets: ["latin"],
  variable: "--font-roboto-mono", // Agregar variable personalizada
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
        <IsDarkMode>
          <NavBar />
          <div className="mt-6">{children}</div>
          <Footer />
        </IsDarkMode>
      </body>
    </html>
  );
}
