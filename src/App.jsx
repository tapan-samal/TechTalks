import Dashboard from "./components/Dashboard";
import "./App.css";
import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Dashboard />
    </ThemeContext.Provider>
  );
};

export default App;
