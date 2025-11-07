"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Featured from "../_ui/Featured";

function FeaturedSpeaker() {
	const speakers = useQuery(api.products.getSpeakers);

	return (
		<>
			{speakers?.map((speaker, index) => (
				<Featured
					key={speaker._id}
					src={speaker.imageUrl}
					alt={speaker.name}
					newProduct={speaker.newProduct}
					title={speaker.name}
					text={speaker.description}
					productId={speaker._id}
					index={index}
					
				/>
			))}
		</>
	);
}

export default FeaturedSpeaker;
