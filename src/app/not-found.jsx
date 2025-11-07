"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	return (
		<section className='grid place-items-center h-dvh'>
			<div className='flex flex-col gap-5 items-center'>
				<h1 className='text-size-h1 leading-h1 tracking-h1'>Page Not Found</h1>
				<button
					onClick={() => router.back()}
					className='bg-primary-black text-primary-white py-2 px-4'>
					Go Back
				</button>
			</div>
		</section>
	);
}
