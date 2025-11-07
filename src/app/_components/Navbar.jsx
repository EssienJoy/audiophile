import Link from "next/link";
import CartButton from "./CartButton";
import Logo from "./Logo";

function Navbar() {
	return (
		<header className='bg-secondary-black '>
			<div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)]'>
				<div className='py-5 border-b border-solid border-b-primary-white flex justify-between items-center text-primary-white '>
					<div className='md:hidden'>
						<svg
							width='16'
							height='15'
							viewBox='0 0 16 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='Group'>
								<rect id='Rectangle' width='16' height='3' fill='white' />
								<rect
									id='Rectangle Copy'
									y='6'
									width='16'
									height='3'
									fill='white'
								/>
								<rect
									id='Rectangle Copy 2'
									y='12'
									width='16'
									height='3'
									fill='white'
								/>
							</g>
						</svg>
					</div>

					<Logo />

					<nav className='hidden md:block'>
						<ul className='flex items-center gap-5'>
							<li>
								<Link className='hover:text-primary-orange' href='/'>
									HOME
								</Link>{" "}
							</li>
							<li>
								<Link
									className='hover:text-primary-orange'
									href='/category/head-phone'>
									HEADPHONES
								</Link>{" "}
							</li>
							<li>
								<Link
									className='hover:text-primary-orange'
									href='/category/speaker'>
									SPEAKER
								</Link>{" "}
							</li>
							<li>
								<Link
									className='hover:text-primary-orange'
									href='/category/ear-phone'>
									EARPHONES
								</Link>{" "}
							</li>
						</ul>
					</nav>
					<CartButton />
				</div>
			</div>
		</header>
	);
}

export default Navbar;
