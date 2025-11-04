import Label from "../_ui/Label";
import Input from "../_ui/Input";

function CheckoutForm() {
	return (
		<section className='flex grow bg-primary-white'>
			<form className='w-full  rounded-lg p-5 flex flex-col gap-15'>
				<h2 className='text-2xl tracking-h2 leading-h2 font-bold'>CHECKOUT</h2>

				<section className='space-y-5'>
					<p className='uppercase text-subtitle tracking-subtitle leading-subtitle text-primary-orange font-bold'>
						Billing Details
					</p>

					<section className='grid grid-cols-2 gap-5'>
						<div className='flex flex-col gap-3'>
							<Label>Name</Label>
							<Input type='text' />
						</div>

						<div className='flex flex-col gap-3'>
							<Label>Email Address</Label>
							<Input type='text' />
						</div>

						<div className='flex flex-col gap-3'>
							<Label>Phone Number</Label>
							<Input type='number' />
						</div>
					</section>
				</section>

				<section className='space-y-5'>
					<p className='uppercase text-subtitle tracking-subtitle leading-subtitle text-primary-orange font-bold'>
						SHIPPING INFO
					</p>

					<div className='flex flex-col gap-3'>
						<Label>Address</Label>
						<Input type='text' />
					</div>

					<section className='grid grid-cols-2 gap-5'>
						<div className='flex flex-col gap-3'>
							<Label>ZIP Code</Label>
							<Input type='text' />
						</div>

						<div className='flex flex-col gap-3'>
							<Label>City</Label>
							<Input type='text' />
						</div>

						<div className='flex flex-col gap-3'>
							<Label>Country</Label>
							<Input type='number' />
						</div>
					</section>
				</section>

				<section className='space-y-5'>
					<p className='uppercase text-subtitle tracking-subtitle leading-subtitle text-primary-orange font-bold'>
						payment details
					</p>

					<section className='grid grid-cols-2 gap-5'>
						<p className='font-bold'>Payment Method</p>

						<div className='flex flex-col gap-3'>
							<label
								className='flex items-center gap-3 py-2 px-4 text-primary-black border border-[#CFCFCF] border-solid rounded-lg'
								htmlFor=''>
								<Input type='radio' className='' />
								<span className='font-bold'>e-money</span>
							</label>

							<label
								htmlFor=''
								className='flex items-center gap-3 py-2 px-4 text-primary-black border border-[#CFCFCF] border-solid rounded-lg'>
								<Input type='radio' className='' />
								<span className='font-bold'>Cash on Delivery</span>
							</label>
						</div>
					</section>

					<section className='grid grid-cols-2 gap-5'>
						<div className='flex flex-col gap-3'>
							<Label>e-Money Number</Label>
							<Input type='number' />
						</div>

						<div className='flex flex-col gap-3'>
							<Label>e-Money PIN</Label>
							<Input type='number' />
						</div>
					</section>
				</section>
			</form>
		</section>
	);
}

export default CheckoutForm;
