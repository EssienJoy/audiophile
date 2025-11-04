"use client";

import { useCart } from "../_context/CartContext";
import Link from "../_ui/Link";

function Cart() {
	const { cartContainer, cartOverlay, hideCart } = useCart();
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
						Cart(0)
					</h6>
					<p>Remove all</p>
				</div>

				<div className='h-[240px] overflow-y-scroll'></div>

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
