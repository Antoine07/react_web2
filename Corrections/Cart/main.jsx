import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import useTheme from "./store/useTheme.js";

const container = document.getElementById("root");
const root = createRoot(container);

// Initialize and keep <html> class in sync with theme
const rootElement = document.documentElement;
const applyThemeClass = (theme) => {
	if (theme === "dark") {
		rootElement.classList.add("dark");
	} else {
		rootElement.classList.remove("dark");
	}
};

applyThemeClass(useTheme.getState().theme);
useTheme.subscribe((state) => applyThemeClass(state.theme));

root.render(<App />);


