import React, { createContext, useContext, useState } from "react";
import "./Styles.css";
// Create a Context for the theme
const ThemeContext = createContext(undefined);
// ThemeProvider component
export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState("light");
return (
<ThemeContext.Provider
value={{
theme,
toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
}}
>
{children}
</ThemeContext.Provider>
);
};
// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
// Switch component to toggle the theme
const Switch = () => {
const { theme, toggleTheme } = useTheme();
return (
<label className="switch">
<input
type="checkbox"
checked={theme === "light"}
onChange={toggleTheme}
/>
<span className="slider round" />
</label>
);
};
// Main application component
const App = () => {
return (
<ThemeProvider>
<div className={app ${theme}}>
<h1>{Current Theme: ${theme}}</h1>
<Switch />
</div>
</ThemeProvider>
);
};
export default App;