"use client";

import Image from "next/image";
import { useAddtoCart } from "../_context/AddtoCartContext";

function CheckoutCart() {
	const { carts } = useAddtoCart();
	return (
		<div className='h-[240px]  overflow-x-hidden overflow-y-scroll flex flex-col gap-5 '>
			{!carts || carts.length === 0 ? (
				<p className='h-full grid place-items-center font-bold'>Checkout is Empty</p>
			) : (
				carts.map((cart) => (
					<div
						key={cart._id}
						className='flex items-center gap-3 justify-between '>
						<figure className='w-[64px] h-[64px] relative'>
							<Image
								src={cart.src}
								alt={cart.title}
								fill
								className='object-contain'
							/>
						</figure>

						<div className='grow'>
							<p className='font-bold'>
								{cart.title.split(" ").slice(0, 2).join(" ")}
							</p>
							<p>$ {cart.price}</p>
						</div>
						<p>X{cart.cartCount}</p>
					</div>
				))
			)}
		</div>
	);
}

export default CheckoutCart;
