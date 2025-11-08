function HeroCategory({ text }) {
	return (
		<section className=' bg-primary-black text-primary-white'>
			<div className='border-t border-solid border-t-primary-white  max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] grid place-items-center h-[336px]'>
				<h1 className='text-size-h2 tracking-h2 leading-h2 uppercase'>
					{text}
				</h1>
			</div>
		</section>
	);
}

export default HeroCategory;
