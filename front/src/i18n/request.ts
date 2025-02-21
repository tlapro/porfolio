import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers"; // Importar cookies correctamente

export default getRequestConfig(async () => {
  const cookieStore = await cookies(); // Usar 'await' para obtener las cookies
  const storedLocale = cookieStore.get("locale")?.value || "es"; // Obtener el idioma

  return {
    locale: storedLocale,
    messages: (await import(`../../messages/${storedLocale}.json`)).default,
  };
});
