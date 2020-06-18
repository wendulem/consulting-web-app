import React from "react";

const ThemeContext = React.createContext();

// why {children} instead of props??
export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={5}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
