"use client";

import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { createGenericContext } from "./useGenericContext";

interface IWalletContext {
  supportedWallets: string[];
  connectedWallet: string | null;
  connectWallet: (wallet: string) => void;
  isAvailable: (wallet: string) => boolean;
}

const [useWalletContext, WalletContextProvider] =
  createGenericContext<IWalletContext>();

const WalletProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const SUPPORTED_WALLETS = useMemo(
    () => [
      "nami",
      "eternl",
      "yoroi",
      "typhon",
      "gerowallet",
      "nufi",
      "lace",
      "begin",
    ],
    []
  );
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [wallets, setWallets] = useState<string[]>([]);

  useEffect(() => {
    const checkForWallets = (count = 0) => {
      let availableWallets: string[] = [];
      console.log("Checking for Cardano wallets...");
      if (typeof window !== "undefined" && window.cardano) {
        availableWallets = Object.keys(window.cardano).filter((key) => {
          return window.cardano && window.cardano[key]?.enable;
        });
        console.log("Available Cardano wallets:", availableWallets);
        if (availableWallets.length === 0 && count < 3) {
          setTimeout(() => {
            checkForWallets(count + 1);
          }, 1000);
          return;
        }
      }
      setWallets(availableWallets);
    };
    checkForWallets(0);
  }, []);

  const connectWallet = async (wallet: string) => {
    if (window.cardano && window.cardano[wallet]?.enable) {
      try {
        await window.cardano[wallet].enable();
        setConnectedWallet(wallet);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    }
  };

  const isAvailable = (wallet: string) => wallets.includes(wallet);

  return (
    <WalletContextProvider
      value={{
        supportedWallets: SUPPORTED_WALLETS,
        connectedWallet,
        connectWallet,
        isAvailable,
      }}
    >
      {children}
    </WalletContextProvider>
  );
};

export { useWalletContext, WalletProvider };
