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
		<section className='my-[10rem] grid grid-cols-3 gap-5 px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto'>
			{categories.map((category) => (
				<div
					key={category.text}
					className='relative py-5 h-[204px] flex flex-col items-center justify-end gap-2 bg-primary-grey rounded-lg overflow-visible'>
					<Image
						src={category.src}
						width={125}
						height={125}
						quality={100}
						alt={category.text}
						className='object-contain absolute -top-[5rem] drop-shadow-[0_40px_25px_rgba(0,0,0,0.45)]'
					/>
					<p className='font-bold text-lg tracking-[1.29px] uppercase'>
						{category.text}
					</p>
					<Link
						textColor='text-primary-black'
						href={category.link}
						bgColor='bg-transparent'
						className='gap-3'>
						<span className='text-xs font-bold'>SHOP</span>
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
			))}
		</section>
	);
}

export default Categories;
