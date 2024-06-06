import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I want to work at Adcreative.ai",
  description: "Simple multi select input utilizing react-select",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme panelBackground="translucent">{children}</Theme>
      </body>
    </html>
  );
}
