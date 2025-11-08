import { v } from "convex/values";
import { query } from "./_generated/server";

export const getHeadPhones = query({
	handler: async (ctx) => {
		const headphones = await ctx.db
			.query("products")
			.filter((q) => q.eq(q.field("category"), "head-phones"))
			.collect();

		const withUrls = await Promise.all(
			headphones.map(async (item) => ({
				...item,
				imageUrl: item.image ? await ctx.storage.getUrl(item.image) : null,
			}))
		);

		return withUrls;
	},
});

export const getSpeakers = query({
	handler: async (ctx) => {
		const speakers = await ctx.db
			.query("products")
			.filter((q) => q.eq(q.field("category"), "speaker"))
			.collect();

		const withUrls = await Promise.all(
			speakers.map(async (item) => ({
				...item,
				imageUrl: item.image ? await ctx.storage.getUrl(item.image) : null,
			}))
		);

		return withUrls;
	},
});

export const getEarphones = query({
	handler: async (ctx) => {
		const earphones = await ctx.db
			.query("products")
			.filter((q) => q.eq(q.field("category"), "ear-phones"))
			.collect();

		const withUrls = await Promise.all(
			earphones.map(async (item) => ({
				...item,
				imageUrl: item.image ? await ctx.storage.getUrl(item.image) : null,
			}))
		);

		return withUrls;
	},
});

export const getProductById = query({
	args: { id: v.id("products") },
	handler: async (ctx, args) => {
		const product = await ctx.db.get(args.id);

		if (!product) {
			return null;
		}

		const imageUrl = product.image
			? await ctx.storage.getUrl(product.image)
			: null;

		const imageSlideUrls = product.imageSlides
			? await Promise.all(
					product.imageSlides.map((storageId: string) =>
						ctx.storage.getUrl(storageId)
					)
				)
			: [];

		return {
			...product,
			imageUrl,
			imageSlideUrls,
		};
	},
});

export const getAllProducts = query({
	handler: async (ctx) => {
		const products = await ctx.db.query("products").collect();

		const withUrls = await Promise.all(
			products.map(async (item) => ({
				...item,
				imageUrl: item.image ? await ctx.storage.getUrl(item.image) : null,
			}))
		);

		return withUrls;
	},
});
