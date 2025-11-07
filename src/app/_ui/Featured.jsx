import Image from "next/image";
import Link from "./Link";

function Featured({
	src,
	alt,
	newProduct,
	title,
	text,
	className = "",
	productId,
}) {
	return (
		<section
			className={`${className} flex items-center gap-25 justify-between my-[8rem]  max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] `}>
			<figure className='w-1/2 h-[560px] relative'>
				<Image fill src={src}  alt={alt} className='object-contain' />
			</figure>

			<div className='flex flex-col gap-7 w-1/2 '>
				{newProduct && (
					<p className='text-sm tracking-[10px]  font-normal text-primary-orange'>
						NEW PRODUCT
					</p>
				)}
				<h2 className='text-size-h2 font-bold leading-h2 uppercase'>{title}</h2>

				<p>{text}</p>

				<Link
					href={`/product-details/${productId}`}
					className='hover:bg-secondary-orange self-start'>
					SEE PRODUCT
				</Link>
			</div>
		</section>
	);
}

export default Featured;
