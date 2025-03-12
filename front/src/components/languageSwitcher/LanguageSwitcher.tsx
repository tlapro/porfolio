"use client";
import { IoLanguage } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations('NavBar')
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const storedLocale =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1] || "es";

    setLocale(storedLocale);
  }, []);

  const changeLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <div className="flex justify-center items-center gap-1 group">
      <IoLanguage size={20} className="group-hover:text-link-hover"/>

      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-card-bg focus:outline-none cursor-pointer group-hover:text-link-hover focus:ring-0"
      >
        <option value="es" className="text-sm text-foreground cursor-pointer">
          {t('spanish')}
        </option>
        <option value="en" className="text-sm text-foreground cursor-pointer">
          {t('english')}
        </option>
      </select>
    </div>
  );
}
