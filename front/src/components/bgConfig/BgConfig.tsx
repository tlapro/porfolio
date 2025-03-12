"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import Cookies from "js-cookie";

export default function BgConfig() {
  const t = useTranslations("NavBar");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedEffect = Cookies.get("effect");
    if (savedEffect === undefined) {
      Cookies.set("effect", "enabled", { expires: 365 });
      setIsActive(true);
    }
    setIsActive(savedEffect === "enabled");
    setIsLoading(false);
  }, []);

  function EnableDisableEffect() {
    const newState = !isActive;
    setIsActive(newState);
    Cookies.set("effect", newState ? "enabled" : "disabled", { expires: 365 });

    window.dispatchEvent(new Event("storage"));
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-black border-dashed rounded-full animate-spin"></div>
          <p className="text-foreground font-medium">Cargando...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center group gap-1">
      <button
        onClick={EnableDisableEffect}
        className="flex justify-center items-center gap-1 pb-2 cursor-pointer"
      >
        {isActive ? (
          <CiCircleRemove
            size={23}
            className="group-hover:text-red-500 group-hover:text-link-text transition duration-300 ease"
          />
        ) : (
          <CiCircleCheck
            size={23}
            className="group-hover:text-green-500 transition duration-300 ease"
          />
        )}
        <p className="group-hover:text-link-text transition duration-300 ease">
          {t("bg-effect")}
        </p>
      </button>
    </div>
  );
}
