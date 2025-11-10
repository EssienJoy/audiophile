import Image from "next/image";
import Link from "../_ui/Link";

function AllProducts({ products }) {
	return (
		<section className='mt-20'>
			<h3 className=' text-[24px] sm:text-size-h3 leading-h3 tracking-h3 uppercase text-center mb-5 md:mb-10'>
				you may also like
			</h3>

			<section className='grid sm:grid-cols-3 gap-10 sm:gap-5'>
				{products?.map((product) => (
					<div key={product._id} className='flex flex-col gap-5'>
						<figure className='relative h-[318px] w-full'>
							<Image
								fill
								alt={product.name}
								src={product.imageUrl}
								className='object-cover sm:object-contain'
							/>
						</figure>

						<p className='text-center text-sm leading-h5 tracking-h5 font-bold uppercase'>
							{product.name.split(" ").slice(0, 2).join(" ")}
						</p>

						<Link
							bgColor='bg-primary-orange'
							textColor='text-primary-white'
							href={`/product-details/${product?._id}`}
							className='uppercase hover:bg-secondary-orange self-center'>
							See Product
						</Link>
					</div>
				))}
			</section>
		</section>
	);
}

export default AllProducts;
