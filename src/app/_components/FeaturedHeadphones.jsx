"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Featured from "../_ui/Featured";

function FeaturedHeadphones() {
	const headPhones = useQuery(api.products.getHeadPhones);

	if (!headPhones) {
		return <p>Loading headphones...</p>;
	}

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
					className={`${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
				/>
			))}
		</>
	);
}

export default FeaturedHeadphones;
