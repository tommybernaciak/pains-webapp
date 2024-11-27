import { useWalletContext } from "@/providers/WalletProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Protected = ({ component }: { component: () => JSX.Element }) => {
  const { connectedWallet } = useWalletContext();
  const router = useRouter();

  useEffect(() => {
    if (!connectedWallet) {
      router.push("/connect");
    }
  });

  return component;
};

export default Protected;
