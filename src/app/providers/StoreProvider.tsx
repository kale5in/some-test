import React from "react";
import { useStore } from "../stores/index";

const StoreContext = React.createContext({});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
