"use client";

import Link from "next/link";
import { useToggle } from "../_context/ToggleMenuContext";

function MobileNav() {
	const { toggleMenu, toggleMenuFalse } = useToggle();
	return (
		<>
			{toggleMenu && (
				<>
					<div
						
						className=' fixed inset-0 bg-black/50 z-[40] '
						onClick={toggleMenuFalse}></div>
					<nav className='py-10 block absolute md:hidden bg-primary-white top-10 right-5 w-[90%] sm:w-1/2 text-primary-black rounded-md z-50'>
						<ul className='flex flex-col items-center gap-5 '>
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
				</>
			)}
		</>
	);
}

export default MobileNav;
