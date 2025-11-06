"use client";

import { useCart } from "../_context/CartContext";
import Link from "../_ui/Link";
import { useAddtoCart } from "../_context/AddtoCartContext";
import Image from "next/image";

function Cart() {
	const { cartContainer, cartOverlay, hideCart } = useCart();
	const { carts } = useAddtoCart();

	return (
		<>
			<div
				ref={cartOverlay}
				className='cart-overlay fixed inset-0 bg-black/50 z-[90] hide'
				onClick={hideCart}></div>
			<section
				ref={cartContainer}
				className='cart-container hide flex flex-col gap-5 bg-primary-white rounded-lg w-[377px] absolute top-25 right-25 p-5 z-100'>
				<div className='flex items-center justify-between'>
					<h6 className='uppercase font-bold text-size-h6 tracking-h6 leading-h6'>
						Cart({carts?.length})
					</h6>
					<p>Remove all</p>
				</div>

				<div className='h-[240px]  overflow-x-hidden overflow-y-scroll flex flex-col gap-5 '>
					{!carts ? (
						<p>Your Cart is Empty</p>
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

								<div className='b flex  h-[32px]  gap-2 items-center  bg-primary-grey'>
									<button className='p-2'>
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
									</button>

									<p>{cart.cartCount}</p>

									<button className='p-2'>
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
									</button>
								</div>
							</div>
						))
					)}
				</div>

				<div className='flex items-center justify-between'>
					<h6 className='uppercase font-bold text-size-h6 tracking-h6 leading-h6'>
						Total
					</h6>
					<p>$1000</p>
				</div>

				<Link
					bgColor='bg-primary-orange'
					text-color='text-primary-white'
					href='/checkout'>
					checkout
				</Link>
			</section>
		</>
	);
}

export default Cart;
