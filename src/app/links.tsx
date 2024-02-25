"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LoadingPing } from "@/components/ui/loading-ping";

export function Links() {
  const _pathname = usePathname();
  const [pathname, setPathname] = useState(_pathname);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setPathname(_pathname);
  }, [_pathname]);

  return (
    <header className="border-b">
      {isPending && <LoadingPing />}

      <div className="mx-auto px-4 lg:px-6 flex items-center justify-between h-[60px] lg:h-[80px]">
        <nav className="flex items-center gap-6">
          <Link
            onClick={() => {
              setPathname("/");
              startTransition(() => {});
            }}
            className={cn("", {
              "underline font-bold": pathname === "/"
            })}
            href="/"
          >
            Home
          </Link>

          <Link
            onClick={() => {
              setPathname("/dashboard");
              startTransition(() => {});
            }}
            className={cn("", {
              "underline font-bold": pathname === "/dashboard"
            })}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
