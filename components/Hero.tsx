import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-end justify-between px-8 md:px-12 pt-40 pb-0 w-full min-h-[500px] md:min-h-[800px] max-w-[1920px] mx-auto gap-16">
            {/* Left Image Arch */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative md:ml-12">
                <ScrollReveal width="100%">
                    <div className="relative w-[400px] h-[550px] md:w-[650px] md:h-[850px] rounded-t-full overflow-hidden">
                        <Image
                            src="/daiga-ellaby-M2P08N9zi2k-unsplash.webp"
                            alt="Hero Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-10 self-center pb-16 md:pb-0 md:pr-8 md:-mt-8">
                <ScrollReveal delay={0.2}>
                    <h1 className="text-7xl md:text-8xl font-serif font-bold text-lilac-green leading-tight tracking-normal">
                        Live your life <br /> in full bloom
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <p className="text-lilac-green font-sans text-base md:text-lg tracking-normal font-medium">
                        Therapy for Adults in Minneapolis, MN.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <button className="border border-lilac-green font-bold px-10 py-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-lilac-green hover:text-lilac-cream transition-colors duration-300 font-medium">
                        Connect with me &rarr;
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
}
