"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Separator from "@/components/Separator";
import parseURL from "@/utils/parseURL";
import Hambuger from "@/components/Hamburger";
import SidebarItems from "@/components/SidebarItems";
import auth from "@/firebase/auth";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [routeHistory, setRouteHistory] = useState<
    Array<{ name: string; pathname: string }> | undefined
  >();
  const [hambugerOpen, setHambugerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const showSidebar =
    pathname !== "/auth" &&
    pathname !== "/auth/register" &&
    pathname !== "/auth/login" &&
    pathname !== "/";

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        if (showSidebar) router.push("/auth/login");
      }
    });
  }, []);

  useEffect(() => {
    setHambugerOpen(false);
    const name = parseURL(pathname, "topics");
    if (!name) return;

    if (!routeHistory) {
      setRouteHistory([{ name, pathname }]);
      return;
    }

    if (routeHistory?.some((route) => route.pathname === pathname)) {
      // TODO: this specific pathname should appear first in the list
      return;
    }

    setRouteHistory((prev) => {
      if (!prev) return [{ name, pathname }];

      if (routeHistory?.length >= 2 && routeHistory[0]?.pathname !== pathname) {
        return [...prev?.slice(1), { name, pathname }];
      }

      return [...prev, { name, pathname }];
    });
  }, [pathname]);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-screen h-screen bg-background-page flex">
          {showSidebar && (
            <>
              <div className="w-96 lg:w-60 h-full bg-sidebar-background pt-32 hidden lg:inline">
                <SidebarItems routeHistory={routeHistory} />
              </div>
              <div className="inline lg:hidden absolute right-4 top-4 z-20">
                <a onClick={() => setHambugerOpen(!hambugerOpen)}>
                  <Hambuger />
                </a>
              </div>
              {hambugerOpen && (
                <div className="w-screen h-screen bg-sidebar-background z-10 pt-32 lg:hidden absolute">
                  <div className="flex flex-col justify-start items-center gap-6">
                    <SidebarItems routeHistory={routeHistory} />
                  </div>
                </div>
              )}
            </>
          )}
          <div className="p-8 pt-28 2xl:p-36 w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
