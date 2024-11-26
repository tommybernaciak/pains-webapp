"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

const SUPPORTED_WALLETS = [
  "nami",
  "eternl",
  "yoroi",
  "typhon",
  "gerowallet",
  "nufi",
  "lace",
  "begin",
];

export default function Connect() {
  const [wallets, setWallets] = useState<string[]>([]);
  const [selectedWallet, setSelectedWallet] = useState(null);

  useEffect(() => {
    console.log("Checking for Cardano wallets...", typeof window);
    // Ensure window is available (runs on the client)
    if (typeof window !== "undefined" && window.cardano) {
      const availableWallets = Object.keys(window.cardano).filter((key) => {
        return window.cardano[key]?.enable; // Only include wallets with the enable method
      });
      console.log("Available Cardano wallets:", availableWallets);
      setWallets(availableWallets);
    }
  }, []);

  return (
    <div className="bg-[#F6F5FF] items-center justify-items-center min-h-screen p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="font-[family-name:var(--font-monument)] uppercase text-2xl font-bold">
              Connect wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 grid-rows-4 gap-4">
            {SUPPORTED_WALLETS.map((wallet) => (
              <Button
                key={wallet}
                className="bg-[#9C3390] text-white flex flex-col justify-center items-center px-4 py-5 rounded-md"
                variant="outline"
              >
                <p>{wallet}</p>
                <p>{wallets.includes(wallet) ? "" : "(Not available)"}</p>
              </Button>
            ))}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Pains footer</p>
      </footer>
    </div>
  );
}
