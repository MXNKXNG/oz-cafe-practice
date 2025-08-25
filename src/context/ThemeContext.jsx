import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return themeCtx;
};
