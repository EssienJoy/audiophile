"use client";

import { useMutation, useQuery } from "convex/react";
import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../../../convex/_generated/api";

function getOrCreateGuestId() {
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
	const [isInitialized, setIsInitialized] = useState(false);

	// Initialize guest ID on mount
	useEffect(() => {
		const id = getOrCreateGuestId();
		setGuestId(id);
		setIsInitialized(true);
	}, []);

	// Fetch cart items from Convex
	const cartItems = useQuery(api.cart.getCart, guestId ? { guestId } : "skip");

	// Mutations
	const addToCartMutation = useMutation(api.cart.addToCart);
	const updateQuantityMutation = useMutation(api.cart.updateCartQuantity);
	const removeFromCartMutation = useMutation(api.cart.removeFromCart);
	const clearCartMutation = useMutation(api.cart.clearCart);

	// Calculate cart count
	const cartCount =
		cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

	// Calculate cart total
	const cartTotal =
		cartItems?.reduce(
			(total, item) => total + item.product.price * item.quantity,
			0
		) || 0;

	// Add product to cart
	const addToCart = async (product, quantity = 1) => {
		if (!guestId) return;

		try {
			await addToCartMutation({
				guestId,
				productId: product._id,
				quantity,
			});
		} catch (error) {
			console.error("Failed to add to cart:", error);
			throw error;
		}
	};

	// Update item quantity
	const updateQuantity = async (cartItemId, quantity) => {
		try {
			await updateQuantityMutation({
				cartItemId,
				quantity,
			});
		} catch (error) {
			console.error("Failed to update quantity:", error);
			throw error;
		}
	};

	// Increase quantity by 1
	const increaseQuantity = async (cartItemId, currentQuantity) => {
		await updateQuantity(cartItemId, currentQuantity + 1);
	};

	// Decrease quantity by 1
	const decreaseQuantity = async (cartItemId, currentQuantity) => {
		if (currentQuantity <= 1) {
			await removeFromCart(cartItemId);
		} else {
			await updateQuantity(cartItemId, currentQuantity - 1);
		}
	};

	// Remove item from cart
	const removeFromCart = async (cartItemId) => {
		try {
			await removeFromCartMutation({ cartItemId });
		} catch (error) {
			console.error("Failed to remove from cart:", error);
			throw error;
		}
	};

	// Clear entire cart
	const clearCart = async () => {
		if (!guestId) return;

		try {
			await clearCartMutation({ guestId });
		} catch (error) {
			console.error("Failed to clear cart:", error);
			throw error;
		}
	};

	// Get specific product from cart
	const getCartItem = (productId) => {
		return cartItems?.find((item) => item.product._id === productId);
	};

	// Check if product is in cart
	const isInCart = (productId) => {
		return cartItems?.some((item) => item.product._id === productId) || false;
	};

	return (
		<AddtoCartContext.Provider
			value={{
				// Cart data
				cart: cartItems || [],
				cartCount,
				cartTotal,
				guestId,
				isInitialized,

				// Cart operations
				addToCart,
				updateQuantity,
				increaseQuantity,
				decreaseQuantity,
				removeFromCart,
				clearCart,

				// Utility functions
				getCartItem,
				isInCart,
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
