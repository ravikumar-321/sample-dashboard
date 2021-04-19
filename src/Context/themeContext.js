import React, { useState } from "react";
import { themes } from "../Components/Color Box/themes";

export const themeContext = React.createContext("");

const [defaultTheme] = themes;

const { Provider } = themeContext;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => defaultTheme.color);
  return <Provider value={[theme, setTheme]}>{children}</Provider>;
};
