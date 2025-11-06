"use client";
import Image from "next/image";
import Button from "./Button";
import { getOrCreateGuestId, useAddtoCart } from "../_context/AddtoCartContext";
import { useState } from "react";
import toast from "react-hot-toast";

function Detail({
	src,
	alt,
	newProduct,
	title,
	text,
	className = "",
	productId,
	price,
}) {
	const [loading, setLoading] = useState(false);
	const { cartQty, increaseCartQty, decreaseCartQty, addToCart, setCartQty } =
		useAddtoCart();

	const handleAddToCart = async () => {
		try {
			setLoading(true);

			await addToCart({
				guestId: getOrCreateGuestId(),
				productId: productId,
				price: price,
				cartCount: cartQty,
				src: src,
				title: title,
			});

			toast.success("Added to cart!");
			setCartQty(0);
		} catch (error) {
			toast.error("Failed to add to cart");
		} finally {
			setLoading(false);
		}
	};
	return (
		<section
			className={`${className} flex items-center gap-25 justify-between my-[1rem]  max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] `}>
			<figure className='w-1/2 h-[560px] relative'>
				<Image fill src={src} alt={alt} className='object-contain' />
			</figure>

			<div className='flex flex-col gap-7 w-1/2 '>
				{newProduct && (
					<p className='text-sm tracking-[10px]  font-normal text-primary-orange'>
						NEW PRODUCT
					</p>
				)}
				<h2 className='text-size-h2 font-bold leading-h2 uppercase'>{title}</h2>

				<p>{text}</p>
				<p className='font-bold'>$ {price}</p>

				<div className='flex items-center gap-5'>
					<div className='flex items-center justify-center w-[120px] h-[48px]  gap-3 bg-primary-grey text-primary-black'>
						<Button onClick={decreaseCartQty}>
							<svg
								width='4'
								height='2'
								viewBox='0 0 4 2'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									opacity='0.25'
									d='M-0.000273407 1.22852V2.42591e-05H3.89973V1.22852H-0.000273407Z'
									fill='black'
								/>
							</svg>
						</Button>

						<p>{cartQty}</p>

						<Button onClick={increaseCartQty}>
							<svg
								width='6'
								height='6'
								viewBox='0 0 6 6'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									opacity='0.25'
									d='M2.32721 5.87598V3.54898H0.000214875V2.32048H2.32721V-1.93715e-05H3.55572V2.32048H5.86971V3.54898H3.55572V5.87598H2.32721Z'
									fill='black'
								/>
							</svg>
						</Button>
					</div>

					<Button
						bgColor={loading ? "bg-secondary-orange" : "bg-primary-orange"}
						textColor='text-primary-white'
						className='hover:bg-secondary-orange uppercase text-sm h-[48px] w-[160px]'
						onClick={handleAddToCart}
						disabled={loading}>
						{loading ? "Adding..." : "Add to Cart"}
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Detail;
