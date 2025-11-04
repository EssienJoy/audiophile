import ProductDetail from "../../_components/ProductDetail";

async function Page({ params }) {
	const { productId } = await params;
	return (
		<>
			<ProductDetail productId={productId} />
		</>
	);
}

export default Page;
