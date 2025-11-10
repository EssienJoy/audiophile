"use client";
import { usePreloadedQuery } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "../_ui/Button";
import Detail from "../_ui/Detail";

function ProductDetail({ productDetail }) {
	const router = useRouter();

	const product = usePreloadedQuery(productDetail);

	return (
		<section>
			<Button
				onClick={() => router.back()}
				bgColor='bg-transparent'
				textColor='text-primary-black'>
				Go Back
			</Button>

			<Detail
				key={product._id}
				src={product.imageUrl}
				alt={product.name}
				newProduct={product.newProduct}
				title={product.name}
				text={product.description}
				productId={product._id}
				price={product.price}
			/>

			<section className='flex flex-col md:flex-row gap-[5rem] my-10'>
				<div className='md:w-1/2 space-y-5'>
					<h3 className='text-[24px] sm:text-size-h3 leading-h3 tracking-h3 uppercase '>
						Features
					</h3>
					<p>{product.fetures}</p>
				</div>

				<div className='md:w-1/2 space-y-5'>
					<h3 className='uppercase text-[24px] sm:text-size-h3 leading-h3 tracking-h3'>
						in the box
					</h3>
					<ul className='flex flex-col gap-1'>
						{product.inBox.map((box, index) => (
							<li key={index + 1} className='space-x-5'>
								<span className='text-primary-orange font-bold'>
									{box.number}
								</span>
								<span>{box.text}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className='grid gap-5 sm:grid-cols-2 h-[756px] sm:h-[592px] sm:grid-rows-2'>
				{product.imageSlideUrls.map((url, index) => {
					return (
						<figure
							key={index + 1}
							className={`relative w-full h-full ${index === 1 ? "sm:row-span-2 " : index === 2 ? "row-span-2 sm:row-span-1" : ""}`}>
							<Image
								fill
								alt={`${product.name} slide ${index + 1}`}
								src={url}
								className='object-cover rounded-lg'
							/>
						</figure>
					);
				})}
			</section>
		</section>
	);
}

export default ProductDetail;
