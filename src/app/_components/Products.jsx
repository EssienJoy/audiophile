import Image from "next/image";
import speaker from "../../../public/images/Group 17.png";
import earphones from "../../../public/images/earphones.png";
import Link from "../_ui/Link";

function Products() {
	return (
		<section className='space-y-6 my-10 px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto'>
			<section className='relative h-[20rem] w-full rounded-md'>
				<Image
					src={speaker}
					fill
					quality={100}
					alt='Speaker'
					className='object-cover absolute'
				/>

				<div className=' flex items-center justify-center z-100 relative bg-[#DBDBDB] h-full w-[35%] '>
					<div className='flex flex-col  gap-6  '>
						<h4 className='text-size-h4 leading-h4 tracking-[2px] font-bold uppercase'>
							zx7 speaker
						</h4>

						<Link
							textColor='text-primary-black'
							href='/product-details/jh7888b7ncw5jc559yf3g0nqzh7tsn3m'
							bgColor='bg-transparent'
							className='border border-solid border-primary-black self-start'>
							SEE PRODUCT
						</Link>
					</div>
				</div>
			</section>

			<section className='grid grid-cols-2 gap-5 rounded-md'>
				<div className='relative rounded-md h-[320px]'>
					<Image
						src={earphones}
						fill
						quality={100}
						alt='ear phones'
						className='object-cover absolute'
					/>
				</div>

				<div className='bg-primary-grey flex items-center justify-center '>
					<div className='flex flex-col gap-6'>
						<h4 className='text-size-h4 leading-h4 tracking-[2px] font-bold'>
							YX1 EARPHONES
						</h4>

						<Link
							textColor='text-primary-black'
							href='/product-details/jh78m8qatwr25qktg9c3z4ebv97trgv2'
							bgColor='bg-transparent'
							className='border border-solid border-primary-black self-start'>
							SEE PRODUCT
						</Link>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Products;
