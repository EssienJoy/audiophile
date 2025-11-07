"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Featured from "../_ui/Featured";

function FeaturedEarphones() {
	const earPhones = useQuery(api.products.getEarphones);



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
					className={`${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
				/>
			))}
		</>
	);
}

export default FeaturedEarphones;
