import Link from "next/link";
import Logo from "@/app/_components/Logo";
import CartButton from "./CartButton";

function Navbar() {
	return (
		<header className='bg-secondary-black '>
			<div className='max-w-[var(--container-max)] mx-auto px-[var(--spacing-main)]'>
				<div className='py-5 border-b border-solid border-b-primary-white flex justify-between items-center text-primary-white '>
					<Logo />

					<nav>
						<ul className='flex items-center gap-5'>
							<li>
								<Link href='/'>HOME</Link>{" "}
							</li>
							<li>
								<Link href='/category/head-phone'>HEADPHONES</Link>{" "}
							</li>
							<li>
								<Link href='/category/speaker'>SPEAKER</Link>{" "}
							</li>
							<li>
								<Link href='/category/ear-phone'>EARPHONES</Link>{" "}
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
