'use cache'

import { fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import Featured from "../_ui/Featured";

async function FeaturedEarphones() {
	const earPhones = await fetchQuery(api.products.getEarphones);

	return (
		<>
			{earPhones?.map((earPhone, index) => (
				<Featured
					key={earPhone._id}
					src={earPhone.imageUrl}
					alt={earPhone.name}
					newProduct={earPhone.newProduct}
					title={earPhone.name}
					text={earPhone.description}
					productId={earPhone._id}
					index={index}
					
				/>
			))}
		</>
	);
}

export default FeaturedEarphones;
