"use client";

import { useRouter } from "next/navigation";
import Button from "../_ui/Button";

function CheckoutBackbutton() {
	const router = useRouter();
	return (
		<Button
			className='absolute -top-15 left-0 hover:text-primary-orange'
			onClick={() => router.back()}
			bgColor='bg-transparent'
			textColor='text-primary-black'>
			Go Back
		</Button>
	);
}

export default CheckoutBackbutton;
