import Image from "next/image";
import manonheadphone from "../../../public/images/manonheadphones.png";

function About() {
	return (
		<section className='flex  flex-col-reverse md:flex-row items-center gap-8 sm:gap-[7rem] my-[7rem] px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto'>
			<div className='md:w-1/2 space-y-6'>
				<h2 className='text-[28px] sm:text-size-h2 leading-h2 text-center md:text-left'>
					BRINGING YOU THE {""}
					<span className='text-primary-orange'>BEST</span> AUDIO GEAR
				</h2>

				<p className='text-center md:text-left'>
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones , earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>

			<figure className='relative h-[300px] w-full md:h-[588px]  md:w-1/2'>
				<Image
					src={manonheadphone}
					fill
					quality={100}
					alt='A man on headphones'
					className='object-cover absolute rounded-md'
				/>
			</figure>
		</section>
	);
}

export default About;
