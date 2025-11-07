import Image from "next/image";
import Link from "../_ui/Link";
import speaker from '../../../public/images/speaker.png';

function SpeakerCategory() {
    return (
			<section className='px-[var(--spacing-main)]  max-w-[var(--container-max)] mx-auto '>
				<div className='flex flex-col md:flex-row items-center sm:h-dvh gap-[3rem] md:gap-[5rem] rounded-lg my-10 bg-primary-orange py-5 px-2 md:py-0'>
					<div className='relative w-[198px] h-[237px]  md:w-[60%]  md:h-[493px] md:self-end'>
						<Image
							src={speaker}
							fill
							quality={100}
							alt='Speaker'
							className='object-contain absolute'
						/>
					</div>

					<div className='flex flex-col items-center md:items-start gap-7 md:w-[40%]  text-primary-white '>
						<h2 className='text-size-h2 font-bold leading-h2 text-center md:text-start'>
							ZX9 <br />
							SPEAKER
						</h2>

						<p className=' sm:w-[60%] md:w-[85%] text-center md:text-start'>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>

						<Link
							href='/product-details/jh7dyfkeaden07cxb925jdta3x7tsebt'
							bgColor='bg-primary-black'
							className='hover:bg-[#4C4C4C] md:self-start'>
							SEE PRODUCT
						</Link>
					</div>
				</div>
			</section>
		);
}

export default SpeakerCategory;
