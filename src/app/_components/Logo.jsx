import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/svg/audiophile-logo.svg";

function Logo() {
    return (
        <Link href="/">
            <Image
                src={logo}
                height="25"
                quality={100}
                width="143"
                alt="Audiophile Logo"
                className="object-contain"
            />

        </Link>
    );
}

export default Logo;
