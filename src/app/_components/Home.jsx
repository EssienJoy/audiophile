import Image from "next/image";
import bg from "../../../public/images/hero-bg.png";
import Link from "../_ui/Link";

function Home() {
	return (
		<section className='h-dvh relative '>
			<Image
				src={bg}
				fill
				quality={100}
				className='object-cover object-bottom'
				alt='HEADPHONES'
			/>

			<section className='max-w-[var(--container-max)] mx-auto h-full flex items-center relative z-10 px-[var(--spacing-main)]'>
				<div className='flex flex-col gap-7 w-[50%]   text-primary-white'>
					<p className='text-sm tracking-[10px]  font-normal'>NEW PRODUCT</p>

					<h1 className='text-size-h1 font-bold leading-h1 tracking-h1'>
						XX99 MARK II HEADPHONES
					</h1>

					<p className='w-[65%]'>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<Link
						href='/product-details/jh7a8697vpwmxe8e627mpxhszd7tr87y'
						className='hover:bg-secondary-orange self-start'>
						SEE PRODUCT
					</Link>
				</div>
			</section>
		</section>
	);
}

export default Home;
