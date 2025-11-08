import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getUserCartByGuestId = query({
	args: { guestId: v.string() },
	handler: async (ctx, args) => {
		const carts = await ctx.db
			.query("cart")
			.filter((q) => q.eq(q.field("guestId"), args.guestId))
			.collect();

		return carts;
	},
});

export const addToCart = mutation({
	args: {
		guestId: v.string(),
		price: v.number(),
		cartCount: v.number(),
		src: v.string(),
		title: v.string(),
		productId: v.string(),
	},
	handler: async (ctx, args) => {
		if (args.cartCount < 1) return;

		const existing = await ctx.db
			.query("cart")
			.filter((q) =>
				q.and(
					q.eq(q.field("guestId"), args.guestId),
					q.eq(q.field("productId"), args.productId)
				)
			)
			.first();

		if (existing) {
			await ctx.db.patch(existing._id, {
				cartCount: existing.cartCount + args.cartCount,
			});
			return existing._id;
		} else {
			return await ctx.db.insert("cart", {
				guestId: args.guestId,
				productId: args.productId,
				price: args.price,
				src: args.src,
				title: args.title,
				cartCount: args.cartCount,
			});
		}
	},
});

export const increaseCartCount = mutation({
	args: {
		guestId: v.string(),
		productId: v.string(),
	},
	handler: async (ctx, args) => {
		const cartItem = await ctx.db
			.query("cart")
			.filter((q) =>
				q.and(
					q.eq(q.field("guestId"), args.guestId),
					q.eq(q.field("productId"), args.productId)
				)
			)
			.first();

		if (!cartItem) {
			throw new Error("Cart item not found");
		}

		await ctx.db.patch(cartItem._id, {
			cartCount: cartItem.cartCount + 1,
		});

		return cartItem._id;
	},
});
export const decreaseCartCount = mutation({
	args: {
		guestId: v.string(),
		productId: v.string(),
	},
	handler: async (ctx, args) => {
		const cartItem = await ctx.db
			.query("cart")
			.filter((q) =>
				q.and(
					q.eq(q.field("guestId"), args.guestId),
					q.eq(q.field("productId"), args.productId)
				)
			)
			.first();

		if (!cartItem) {
			throw new Error("Cart item not found");
		}

		if (cartItem.cartCount <= 1) {
			await ctx.db.delete(cartItem._id);
			return { deleted: true }; 
		}

		await ctx.db.patch(cartItem._id, {
			cartCount: cartItem.cartCount - 1,
		});

		return { deleted: false, _id: cartItem._id }; 
	},
});
export const emptyCart = mutation({
	args: {
		guestId: v.string(),
	},
	handler: async (ctx, args) => {
		const cartItems = await ctx.db
			.query("cart")
			.filter((q) => q.eq(q.field("guestId"), args.guestId))
			.collect();

		for (const item of cartItems) {
			await ctx.db.delete(item._id);
		}
	},
});
