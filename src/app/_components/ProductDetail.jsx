"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";

import Button from "../_ui/Button";
import Detail from "../_ui/Detail";
import Image from "next/image";
import Link from "../_ui/Link";

function ProductDetail({ productId }) {
	const router = useRouter();
	const products = useQuery(api.products.getAllProducts);

	const product = useQuery(api.products.getProductById, {
		id: productId,
	});

	if (!product || !products) return;
	<div className='spinner grid place-items-center'></div>;
	return (
		<section className='my-5 sm:my-10 max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] '>
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

			<section className='mt-20'>
				<h3 className=' text-[24px] sm:text-size-h3 leading-h3 tracking-h3 uppercase text-center mb-5 md:mb-10'>
					you may also like
				</h3>

				<section className='grid sm:grid-cols-3 gap-10 sm:gap-5'>
					{products?.map((product) => (
						<div key={product._id} className='flex flex-col gap-5'>
							<figure className='relative h-[318px] w-full'>
								<Image
									fill
									alt={product.name}
									src={product.imageUrl}
									className='object-cover sm:object-contain'
								/>
							</figure>

							<p className='text-center text-sm leading-h5 tracking-h5 font-bold uppercase'>
								{product.name.split(" ").slice(0, 2).join(" ")}
							</p>

							<Link
								bgColor='bg-primary-orange'
								textColor='text-primary-white'
								href={`/product-details/${product?._id}`}
								className='uppercase hover:bg-secondary-orange self-center'>
								See Product
							</Link>
						</div>
					))}
				</section>
			</section>
		</section>
	);
}

export default ProductDetail;
