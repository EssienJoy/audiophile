"use client";

import { useMutation } from "convex/react";
import { useQuery } from "convex/react";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";

export function getOrCreateGuestId() {
	if (typeof window === "undefined") return "";

	let guestId = localStorage.getItem("guestId");

	if (!guestId) {
		guestId = crypto.randomUUID();
		localStorage.setItem("guestId", guestId);
	}

	return guestId;
}

const AddtoCartContext = createContext();

function AddtoCartProvider({ children }) {
	const [guestId, setGuestId] = useState("");
	const [cartQty, setCartQty] = useState(0);
	const addToCart = useMutation(api.cart.addToCart);

	useEffect(() => {
		const id = getOrCreateGuestId();
		setGuestId(id);
	}, []);

	const carts = useQuery(
		api.cart.getUserCartByGuestId,
		guestId ? { guestId } : "skip"
	);

	function increaseCartQty() {
		setCartQty((qty) => qty + 1);
	}
	function decreaseCartQty() {
		if (cartQty < 1) return;
		setCartQty((qty) => qty - 1);
	}

	return (
		<AddtoCartContext.Provider
			value={{
				carts,
				cartQty,
				increaseCartQty,
				decreaseCartQty,
				addToCart,
				setCartQty,
			}}>
			{children}
		</AddtoCartContext.Provider>
	);
}

function useAddtoCart() {
	const context = useContext(AddtoCartContext);
	if (!context) throw new Error("Context used outside provider");
	return context;
}

export { AddtoCartProvider, useAddtoCart };
