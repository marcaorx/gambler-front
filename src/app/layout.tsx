import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import DefaultLayout from "@/components/defaultLayout";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gambler AI",
  description: "Sinais de jogos inteligentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
