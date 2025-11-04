"use client";

import Button from "../_ui/Button";

function CheckoutPayment() {
	return (
		<section className=' bg-primary-white rounded-lg p-5 w-[30%] flex flex-col gap-15'>
			<h2 className='text-2xl tracking-h2 leading-h2 font-bold'>summary</h2>

			<section>
				<div className='flex justify-between'>
					<p>Total</p>
					<p>$5000</p>
				</div>
				<div className='flex justify-between'>
					<p>SHIPPING</p>
					<p>$5000</p>
				</div>
				<div className='flex justify-between'>
					<p>VAT (INCLUDED)</p>
					<p>$5000</p>
				</div>
				<div className='flex justify-between mt-5'>
					<p>GRAND TOTAL</p>
					<p>$5000</p>
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
