import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Button} from "@/components/ui/button";
import {MoveUpRight} from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Guillaume Berthonneau",
  description: "Designer at Bordeaux, France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased bg-project-background font-medium p-4`}
      >
      <div className={"grid grid-cols-3 mb-3"}>
        <div className={"text-lg"}>GUILLAUME BERTHONNEAU</div>
        <div className={"text-center text-lg"}>(GRID_LAB)</div>
        <div className={"text-end text-muted-foreground"}>UPDATED ON NOVEMBER 12, 2024</div>
      </div>
      <div className={"flex gap-4 mb-20"}>
          <div className={"flex flex-col gap-0"}>
              <Button asChild variant={"link"}>
                  <a href="https://google.com" target={"_blank"}>
                      <MoveUpRight className={"h-1 w-1"}/>
                      LINKEDIN
                  </a>
              </Button>
              <Button asChild variant={"link"}>
                  <a href="https://google.com" target={"_blank"}>
                      <MoveUpRight className={"h-1 w-1"}/>
                      X (TWITTER)
                  </a>
              </Button>
          </div>
          <div className={"flex flex-col gap-0"}>
              <Button asChild variant={"link"}>
                  <a href="https://google.com" target={"_blank"}>
                      <MoveUpRight className={"h-1 w-1"}/>
                      READ.CV
                  </a>
              </Button>
              <Button asChild variant={"link"}>
                  <a href="https://google.com" target={"_blank"}>
                      <MoveUpRight className={"h-1 w-1"}/>
                      BEHANCE
                  </a>
              </Button>
          </div>
      </div>
      {children}
      </body>
    </html>
  );
}
