"use client";

import { useContext, createContext, useRef } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
	const cartContainer = useRef(null);
	const cartOverlay = useRef(null);

	function showCart() {
		cartContainer.current?.classList.remove("hide");
		cartOverlay.current?.classList.remove("hide");
	}

	function hideCart() {
		cartContainer.current?.classList.add("hide");
		cartOverlay.current?.classList.add("hide");
	}

	return (
		<CartContext.Provider
			value={{ cartContainer, showCart, cartOverlay, hideCart }}>
			{children}
		</CartContext.Provider>
	);
}

function useCart() {
	const context = useContext(CartContext);
	if (!context) throw new Error("Context used outside provider");
	return context;
}

export { CartProvider, useCart };
