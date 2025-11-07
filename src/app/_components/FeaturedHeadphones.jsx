"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Featured from "../_ui/Featured";

function FeaturedHeadphones() {
	const headPhones = useQuery(api.products.getHeadPhones);

	return (
		<>
			{headPhones?.map((headPhone, index) => (
				<Featured
					key={headPhone._id}
					src={headPhone.imageUrl}
					alt={headPhone.name}
					newProduct={headPhone.newProduct}
					title={headPhone.name}
					text={headPhone.description}
					productId={headPhone._id}
					index={index}
				
				/>
			))}
		</>
	);
}

export default FeaturedHeadphones;
