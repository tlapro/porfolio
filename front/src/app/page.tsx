"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      router.push("/home")
    }
  }, [pathname, router]);

  return (
    <div>
      
    </div>
  );
}
