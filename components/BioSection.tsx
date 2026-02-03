import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function BioSection() {
    return (
        <section className="bg-lilac-beige w-full py-32 md:py-40 px-8 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">

                {/* LEFT TEXT */}
                <div className="flex flex-col gap-6 max-w-xl items-start text-left">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-lilac-green leading-tight tracking-tight">
                            Hi, I’m Lilac.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-lg md:text-xl text-lilac-green font-sans leading-[2] font-normal">
                            I’m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we’ll work together to navigate the challenges life throws your way.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} width="100%">
                        <Link href="/connect" className="mt-[5.5rem] mx-auto block w-fit border border-lilac-green px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-lilac-green hover:text-lilac-beige transition-colors duration-300 font-bold">
                            Let’s Chat →
                        </Link>
                    </ScrollReveal>
                </div>

                {/* RIGHT IMAGE COLUMN */}
                <div className="relative flex justify-end mt-24 md:mt-0">
                    <ScrollReveal width="100%" className="flex justify-end relative">
                        {/* Arch image */}
                        <div className="relative w-[450px] h-[650px] md:w-[550px] md:h-[750px] rounded-t-full overflow-hidden bg-gray-300 z-10">
                            <Image
                                src="/daiga.webp"
                                alt="Bio Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating overlay circle */}
                        <div
                            className="
                            absolute
                            bottom-[0rem] right-[-3rem]
                            md:bottom-[-6rem] md:right-[-12rem]
                            w-56 h-56 md:w-[400px] md:h-[400px]
                            rounded-full
                            overflow-hidden
                            bg-gray-400
                            z-20
                            hidden
                            md:block
                            "
                        >
                            <Image
                                src="/lilac.webp"
                                alt="Bio Overlay"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
