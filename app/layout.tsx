import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Button} from "@/components/ui/button";
import {MoveUpRight} from "lucide-react";
import Image from "next/image";
import signature from "./signature.png"

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
      <div className={"grid grid-cols-3"}>
          <div className={""}>
              <div>
                  GUILLAUME BERTHONNEAU
              </div>
              <div className={"flex gap-y-0 gap-x-4 mb-20"}>
                  <div className={"flex items-start flex-col gap-0"}>
                      <Button asChild variant={"link"} className={"px-0"}>
                          <a href="https://google.com" target={"_blank"}>
                              <MoveUpRight className={"h-1 w-1"}/>
                              LINKEDIN
                          </a>
                      </Button>
                      <Button asChild variant={"link"} className={"px-0"}>
                          <a href="https://google.com" target={"_blank"}>
                              <MoveUpRight className={"h-1 w-1"}/>
                              X (TWITTER)
                          </a>
                      </Button>
                  </div>
                  <div className={"flex items-start flex-col gap-0"}>
                      <Button asChild variant={"link"} className={"px-0"}>
                          <a href="https://google.com" target={"_blank"}>
                              <MoveUpRight className={"h-1 w-1"}/>
                              READ.CV
                          </a>
                      </Button>
                      <Button asChild variant={"link"} className={"px-0"}>
                          <a href="https://google.com" target={"_blank"}>
                              <MoveUpRight className={"h-1 w-1"}/>
                              BEHANCE
                          </a>
                      </Button>
                  </div>
                  <div className={"flex items-start justify-end flex-col gap-0"}>
                      <Button asChild variant={"link"} className={"px-0"}>
                          <a href="https://google.com" target={"_blank"}>
                              <MoveUpRight className={"h-1 w-1"}/>
                              MAIL
                          </a>
                      </Button>
                  </div>
              </div>
          </div>
          <div className={"relative text-center"}>
              <div>I&#39;M A DESIGNER @ANAGRAM</div>
              <Image src={signature} alt={"Signature"}
                     className={"absolute left-1/2 -top-2 w-[182px] -translate-x-1/2"}/>
          </div>
          <div className={"text-end"}>
              <div>(GRID_LAB)</div>
              <div className={"text-sm text-muted-foreground"}>UPDATED ON NOVEMBER 12, 2024</div>
              <div className={"text-sm"}>BORDEAUX, FRANCE</div>
          </div>
      </div>
      {children}
      </body>
    </html>
  );
}
