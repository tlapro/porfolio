import { Roboto, Merriweather, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import IsDarkMode from "@/components/isDark/IsDarkMode";
import BackgroundText from "@/components/backgroundText/BackgroundText";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages} from 'next-intl/server';
import { cookies } from "next/headers";


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

export const metadata = {
  title: "Tomas Laprovitta",
  description: "Portfolio",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const storedLocale = cookieStore.get("locale")?.value ?? "es";
  console.log("Stored Locale:", storedLocale); // Verifica el valor de la cookie

  // Obtener los mensajes usando el locale
  const messages = await getMessages({ locale: storedLocale });
  console.log("Messages:", messages); // Verifica los mensajes cargados

  return (
    <html lang={storedLocale}>
      <body
        className={`${robotoMono.variable} ${roboto.variable} ${merriweather.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={storedLocale}>
          <BackgroundText />
            <IsDarkMode>
              <NavBar />
              <div className="relative z-10 mt-6">{children}</div>
              <Footer />
            </IsDarkMode>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
