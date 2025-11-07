import Image from "next/image";
import Link from "./Link";

function Featured({
	src,
	alt,
	newProduct,
	title,
	text,
	productId,
	index,
}) {
	return (
		<section
			className={` ${index % 2 !== 0 ? "f md:flex-row-reverse" : " md:flex-row"} flex flex-col md:flex-row items-center gap-10 md:gap-25 justify-between my-[8rem]  max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] `}>
			<figure className='w-full md:w-1/2 h-[327px] sm:h-[450px] md:h-[560px] relative'>
				<Image
					fill
					src={src}
					alt={alt}
					className=' object-cover md:object-contain rounded-md'
				/>
			</figure>

			<div className='flex flex-col items-center md:items-start  gap-7 md:w-1/2 '>
				{newProduct && (
					<p className='text-center md:text-left text-sm tracking-[10px]  font-normal text-primary-orange'>
						NEW PRODUCT
					</p>
				)}
				<h2 className='w-[80%] md:w-full text-center md:text-left text-[28px] sm:text-size-h2 font-bold leading-h2 uppercase '>
					{title}
				</h2>

				<p className='text-center md:text-left sm:w-[80%] md:w-full '>{text}</p>

				<Link
					href={`/product-details/${productId}`}
					className='hover:bg-secondary-orange md:self-start self-center'>
					SEE PRODUCT
				</Link>
			</div>
		</section>
	);
}

export default Featured;
