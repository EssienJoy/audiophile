import Image from "next/image";
import manonheadphone from '../../../public/images/manonheadphones.png';

function About() {
    return (
        <section className="flex items-center gap-[7rem] my-[7rem] px-[var(--spacing-main)] max-w-[var(--container-max)] mx-auto">
            <div className="w-1/2 space-y-6">
                <h2 className="text-size-h2 leading-h2 ">BRINGING YOU THE {''}
                    <span className="text-primary-orange">BEST</span> AUDIO GEAR</h2>

                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones
                    , earphones, speakers, and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and experience a wide range of our products.
                    Stop by our store to meet some of the fantastic people who
                    make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

            <figure className="relative rounded-md h-[588px] w-1/2">
                <Image src={manonheadphone}
                    fill
                    quality={100}
                    alt="A man on headphones"
                    className="object-cover absolute" />

            </figure>

        </section>
    );
}

export default About;
