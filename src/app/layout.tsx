"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Separator from "@/components/Separator";
import parseURL from "@/utils/parseURL";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [routeHistory, setRouteHistory] = useState<
    Array<{ name: string; pathname: string }> | undefined
  >();
  const pathname = usePathname();
  const showSidebar = pathname !== "/auth" && pathname !== "/";

  useEffect(() => {
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
            <div className="w-96 lg:w-60 h-full bg-sidebar-background pt-32 hidden md:inline">
              <div className="sticky">
                <div className="w-full h-full flex flex-col justify-start items-center gap-24">
                  <div className="flex flex-col justify-start items-center gap-6">
                    <Link href="/topics">
                      <p className="font-medium text-2xl">Topics</p>
                    </Link>
                    <Separator width={140} />
                    {/* TODO change this depending on route */}
                    {routeHistory &&
                      routeHistory.map(({ name, pathname }) => (
                        <Link href={pathname} className="text-sm font-normal">
                          {name}
                        </Link>
                      ))}
                  </div>
                  <div className="flex flex-col justify-start items-center gap-6">
                    <p className="font-medium text-2xl">Solutions</p>
                    <Separator width={140} />
                    {/* TODO change this depending on route */}
                    <p className="text-sm font-normal">The use of calloc</p>
                    <p className="text-sm font-normal">The use of malloc</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="p-8 pt-28 lg:p-36 w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
