"use client";

import { useAddtoCart } from "../_context/AddtoCartContext";
import Button from "../_ui/Button";
import CheckoutCart from "./CheckoutCart";

function CheckoutPayment() {
	const { total } = useAddtoCart();
	return (
		<section className=' bg-primary-white rounded-lg p-5 w-full md:w-[40%] flex flex-col gap-5'>
			<h2 className='text-[28px] sm:text-2xl tracking-h2 leading-h2 font-bold'>
				summary
			</h2>
			<CheckoutCart />

			<section>
				<div className='flex justify-between'>
					<p>TOTAL</p>
					<p className='font-bold'>${total}</p>
				</div>

				<div className='flex justify-between my-2 '>
					<p>SHIPPING</p>
					<p className='font-bold'>$50</p>
				</div>

				<div className='flex justify-between'>
					<p>VAT (INCLUDED)</p>
					<p>${total * 0.2}</p>
				</div>

				<div className='flex justify-between  mt-7'>
					<p>GRAND TOTAL</p>
					<p className='font-bold'>${total + 50}</p>
				</div>
			</section>

			<Button
				bgColor='bg-primary-orange'
				textColor='text-primary-white'
				onClick={() => console.log("red")}>
				CONTINUE & PAY
			</Button>
		</section>
	);
}

export default CheckoutPayment;
