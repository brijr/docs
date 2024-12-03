import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Manrope as Font } from "next/font/google";
import type { ReactNode } from "react";

export const metadata = {
  title: "Notes by Bridger Tower / Designer and Developer",
  description:
    "This site is a collection of notes and ideas about design and development created by Bridger Tower.",
};

const font = Font({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
