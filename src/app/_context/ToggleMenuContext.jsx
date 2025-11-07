"use client";

import { useContext, createContext } from "react";
import { useState } from "react";

const ToggleContext = createContext();

function ToggleProvider({ children }) {
	const [toggleMenu, setToggleMenu] = useState(false);

	function handleToggleMenu() {
		setToggleMenu(true);
	}

	function toggleMenuFalse() {
		setToggleMenu(false);
	}

	return (
		<ToggleContext.Provider
			value={{ toggleMenu, handleToggleMenu, toggleMenuFalse }}>
			{children}
		</ToggleContext.Provider>
	);
}

function useToggle() {
	const context = useContext(ToggleContext);
	if (!context) throw new Error("Context used outside provider");
	return context;
}

export { ToggleProvider, useToggle };
