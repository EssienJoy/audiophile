"use cache";

import ProductDetail from "../../_components/ProductDetail";
import AllProducts from "../../_components/AllProducts";
import { fetchQuery, preloadQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

async function Page({ params }) {
	const { productId } = await params;
	const [products, product] = await Promise.all([
		fetchQuery(api.products.getAllProducts),
		preloadQuery(api.products.getProductById, { id: productId }),
	]);

	return (
		<section className='my-5 sm:my-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] '>
			<ProductDetail productDetail={product} />
			<AllProducts products={products} />
		</section>
	);
}

export default Page;
