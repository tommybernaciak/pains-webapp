import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WalletProvider } from "@/providers/WalletProvider";

const monument = localFont({
  src: "./fonts/Monument-Regular.otf",
  variable: "--font-monument",
  weight: "100 700 900",
});

export const metadata: Metadata = {
  title: "Pains Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monument.variable} antialiased`}>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
