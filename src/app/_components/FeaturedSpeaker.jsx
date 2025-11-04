"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Featured from "../_ui/Featured";

function FeaturedSpeaker() {
	const speakers = useQuery(api.products.getSpeakers);

	if (!speakers) {
		return <p>Loading speaker...</p>;
	}

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
					className={`${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
				/>
			))}
		</>
	);
}

export default FeaturedSpeaker;
