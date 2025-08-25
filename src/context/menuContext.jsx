import { createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  return (
    <menuContext.Provider value={{ menu: data.menu, options: data.options }}>
      {children}
    </menuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(menuContext);
};
