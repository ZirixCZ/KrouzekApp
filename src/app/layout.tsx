import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Separator from "@/components/Separator";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-screen h-screen bg-background-page flex">
          <div className="w-60 h-full bg-sidebar-background pt-32 hidden md:inline">
            <div className="w-full h-full flex flex-col justify-start items-center gap-24">
              <div className="flex flex-col justify-start items-center gap-6">
                <p className="font-medium text-2xl">Topics</p>
                <Separator width={140} />
                {/* TODO change this depending on route */}
                <p className="text-sm font-normal">Actions</p>
                <p className="text-sm font-normal">Actions</p>
                <p className="text-sm font-normal">Actions</p>
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
          <div className="p-0 md:p-36">{children}</div>
        </div>
      </body>
    </html>
  );
}
