import Image from "next/image";
import Link from "../_ui/Link";
import headphone from "../../../public/images/headphone-category.png";
import earphone from "../../../public/images/earphone-category.png";
import speaker from "../../../public/images/speaker-category.png";

const categories = [
	{
		text: "headphones",
		src: headphone,
		link: "/category/head-phone",
	},
	{
		text: "speaker",
		src: speaker,
		link: "/category/speaker",
	},
	{
		text: "earphone",
		src: earphone,
		link: "/category/ear-phone",
	},
];

function Categories() {
	return (
		<section className=' my-[7rem] md:my-[10rem] grid sm:grid-cols-3 gap-15 sm:gap-5 px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto'>
			{categories.map((category) => (
				<div
					key={category.text}
					className='h-[165px]  sm:h-[200px]  flex flex-col items-center justify-center  bg-primary-grey rounded-lg overflow-visible'>
					<figure className='relative w-full h-[160px]  '>
						<Image
							src={category.src}
							fill
							quality={100}
							alt={category.text}
							className='-translate-y-10 object-contain absolute drop-shadow-[0_40px_25px_rgba(0,0,0,0.45)]'
						/>
					</figure>

					<div className="pb-5 flex flex-col gap-1">
						<p className='font-bold sm:text-lg tracking-[1.29px] uppercase'>
							{category.text}
						</p>
						<Link
							textColor='text-primary-black'
							href={category.link}
							bgColor='bg-transparent'
							className='gap-3 hover:text-primary-orange '>
							<span className='text-xs font-bold '>SHOP</span>
							<svg
								width='8'
								height='12'
								viewBox='0 0 8 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M0.707153 0.707092L5.70715 5.70709L0.707153 10.7071'
									stroke='#D87D4A'
									strokeWidth='2'
								/>
							</svg>
						</Link>
					</div>
				</div>
			))}
		</section>
	);
}

export default Categories;
