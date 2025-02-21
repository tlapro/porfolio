"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const storedLocale = document.cookie
      .split("; ")
      .find(row => row.startsWith("locale="))
      ?.split("=")[1] || "es";
    
    setLocale(storedLocale);  
  }, []);

  const changeLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <select
    value={locale}
    onChange={(e) => changeLanguage(e.target.value)}
    className="bg-card-bg focus:outline-none cursor-pointer hover:text-link-hover focus:ring-0"
    >
    <option value="es" className="text-sm text-foreground cursor-pointer">ES</option>
    <option value="en" className="text-sm text-foreground cursor-pointer">EN</option>
    </select>
  );
}
