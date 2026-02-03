import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function BlogHero() {
    return (
        <section className="w-full py-32 px-4 md:px-12 bg-lilac-cream">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Arched Image */}
                <div className="relative w-full md:max-w-[600px] h-[600px] md:h-[850px] overflow-hidden rounded-t-full bg-lilac-beige justify-self-center md:justify-self-end md:mr-32">
                    <ScrollReveal width="100%" className="h-full">
                        <Image
                            src="/books.webp"
                            alt="Books and cozy setting"
                            fill
                            className="object-cover"
                            priority
                        />
                    </ScrollReveal>
                </div>

                {/* Right Column - Content */}
                <div className="flex flex-col gap-8 md:pl-0 -mt-20">
                    <ScrollReveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-serif text-lilac-green font-normal whitespace-nowrap">
                            The Lilac Blog
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <div className="space-y-6 text-2xl text-lilac-green max-w-xl">
                            <p>
                                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
                            </p>
                            <p className="font-medium">
                                Glad you're here.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
