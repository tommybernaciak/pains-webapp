export {};

interface Cardano {
  [key: string]: {
    enable?: () => Promise<void>;
  };
}

declare global {
  interface Window {
    cardano?: Cardano;
  }
}
