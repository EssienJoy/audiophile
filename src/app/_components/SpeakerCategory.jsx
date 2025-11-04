import Image from "next/image";
import Link from "../_ui/Link";
import speaker from '../../../public/images/speaker.png';

function SpeakerCategory() {
    return (
        <section className="px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto">
            <div className="flex items-center h-dvh  gap-[5rem] rounded-lg my-10 bg-primary-orange ">
                <div className="relative w-[60%]  h-[493px] self-end">
                    <Image
                        src={speaker}
                        fill
                        quality={100}
                        alt="Speaker"
                        className="object-contain absolute"
                    /></div>

                <div className="flex flex-col gap-7 w-[40%]  text-primary-white ">

                    <h2 className="text-size-h2 font-bold leading-h2 ">
                        ZX9 <br />
                        SPEAKER
                    </h2>

                    <p className="w-[85%]">Upgrade to premium speakers that are
                        phenomenally built to deliver truly remarkable sound.</p>

                    <Link
                        href="/"
                        bgColor="bg-primary-black"
                        className="hover:bg-secondary-black self-start"
                    >
                        SEE PRODUCT
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SpeakerCategory;
