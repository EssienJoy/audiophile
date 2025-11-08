import Link from "next/link";
import CartButton from "./CartButton";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
	return (
		<header className='bg-secondary-black '>
			<div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)] py-5  flex justify-between items-center text-primary-white '>
				<HamburgerMenu />
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
		</header>
	);
}

export default Navbar;
