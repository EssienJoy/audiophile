// convex/cart.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Add item to cart
export const addToCart = mutation({
	args: {
		guestId: v.string(),
		productId: v.id("products"),
		quantity: v.optional(v.number()),
	},
	handler: async (ctx, args) => {
		const quantity = args.quantity || 1;

		// Check if item already exists in cart
		const existing = await ctx.db
			.query("cart")
			.withIndex("by_guest_product", (q) =>
				q.eq("guestId", args.guestId).eq("productId", args.productId)
			)
			.first();

		if (existing) {
			// Update quantity if already in cart
			await ctx.db.patch(existing._id, {
				quantity: existing.quantity + quantity,
			});
			return existing._id;
		} else {
			// Add new item to cart
			return await ctx.db.insert("cart", {
				guestId: args.guestId,
				productId: args.productId,
				quantity,
				addedAt: Date.now(),
			});
		}
	},
});

// Get cart items for a guest
export const getCart = query({
	args: { guestId: v.string() },
	handler: async (ctx, args) => {
		const cartItems = await ctx.db
			.query("cart")
			.withIndex("by_guest", (q) => q.eq("guestId", args.guestId))
			.collect();

		// Get full product details for each cart item
		const itemsWithProducts = await Promise.all(
			cartItems.map(async (item) => {
				const product = await ctx.db.get(item.productId);
				if (!product) return null;

				const imageUrl = product.image
					? await ctx.storage.getUrl(product.image)
					: null;

				return {
					cartItemId: item._id,
					quantity: item.quantity,
					product: {
						...product,
						imageUrl,
					},
				};
			})
		);

		return itemsWithProducts.filter((item) => item !== null);
	},
});

// Update cart item quantity
export const updateCartQuantity = mutation({
	args: {
		cartItemId: v.id("cart"),
		quantity: v.number(),
	},
	handler: async (ctx, args) => {
		if (args.quantity <= 0) {
			// Remove item if quantity is 0 or less
			await ctx.db.delete(args.cartItemId);
		} else {
			await ctx.db.patch(args.cartItemId, {
				quantity: args.quantity,
			});
		}
	},
});

// Remove item from cart
export const removeFromCart = mutation({
	args: { cartItemId: v.id("cart") },
	handler: async (ctx, args) => {
		await ctx.db.delete(args.cartItemId);
	},
});

// Clear entire cart for a guest
export const clearCart = mutation({
	args: { guestId: v.string() },
	handler: async (ctx, args) => {
		const cartItems = await ctx.db
			.query("cart")
			.withIndex("by_guest", (q) => q.eq("guestId", args.guestId))
			.collect();

		await Promise.all(cartItems.map((item) => ctx.db.delete(item._id)));
	},
});

// Get cart count
export const getCartCount = query({
	args: { guestId: v.string() },
	handler: async (ctx, args) => {
		const cartItems = await ctx.db
			.query("cart")
			.withIndex("by_guest", (q) => q.eq("guestId", args.guestId))
			.collect();

		return cartItems.reduce((total, item) => total + item.quantity, 0);
	},
});
