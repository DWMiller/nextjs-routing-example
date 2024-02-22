"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const _pathname = usePathname();
  const [pathname, setPathname] = useState(_pathname);

  useEffect(() => {
    setPathname(_pathname);
  }, [_pathname]);

  return (
    <header className="border-b">
      <div className="mx-auto px-4 lg:px-6 flex items-center justify-between h-[60px] lg:h-[80px]">
        <nav className="flex items-center gap-6">
          <Link
            // onClick={() => setPathname("/")}
            className={pathname === "/" ? "underline font-bold" : ""}
            href="/"
          >
            Home
          </Link>

          <Link
            // onClick={() => setPathname("/dashboard")}
            className={pathname === "/dashboard" ? "underline font-bold" : ""}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
