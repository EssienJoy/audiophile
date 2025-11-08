import { Suspense } from "react";
import ProductDetail from "../../_components/ProductDetail";
import Spinner from "../../_components/Spinner";

async function Page({ params }) {
	const { productId } = await params;
	return (
		<Suspense fallback={<Spinner />}>
			<ProductDetail productId={productId} />
		</Suspense>
	);
}

export default Page;
