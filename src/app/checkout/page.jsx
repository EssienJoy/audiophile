import CheckoutBackbutton from "../_components/CheckoutBackbutton";
import CheckoutForm from "../_components/CheckoutForm";
import CheckoutPayment from "../_components/CheckoutPayment";

function page() {
	return (
		<section className='py-25  bg-primary-grey'>
			<div className='relative  flex flex-col md:flex-row gap-5 items-start max-w-[var(--container-max)] px-[var(--spacing-main)] mx-auto '>
				<CheckoutBackbutton />
				<CheckoutForm />
				<CheckoutPayment />
			</div>
		</section>
	);
}

export default page;
