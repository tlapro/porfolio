"use client"

import { useEffect, useState } from "react"

export default function IsDarkMode ({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const isDark = localStorage.getItem("theme");
        if (isDark) {
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [isLoading]);

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
    return <>{children}</>
}