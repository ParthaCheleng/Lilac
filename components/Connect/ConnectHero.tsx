import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ConnectHero() {
    return (
        <section className="w-full max-w-[1920px] mx-auto bg-lilac-lavender py-32 md:py-48">
            <div className="w-full px-6 md:pl-32 md:pr-16 flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Content: Title, Text, Images */}
                <div className="w-full md:w-1/2 flex flex-col gap-16 md:pl-12">
                    <div className="flex flex-col gap-16">
                        <ScrollReveal>
                            <h1 className="text-6xl md:text-8xl font-serif font-medium text-lilac-green tracking-tight">
                                Let’s Connect
                            </h1>
                        </ScrollReveal>

                        <div className="space-y-6 max-w-lg">
                            <ScrollReveal delay={0.2}>
                                <p className="text-xl md:text-2xl text-lilac-green font-sans font-normal">
                                    Starting therapy is courageous.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <p className="text-xl md:text-2xl text-lilac-green font-sans font-normal leading-relaxed">
                                    Get in touch for questions, or to book a free 15-minute consultation.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Images - Now below text in left column */}
                    <div className="relative h-[450px] w-full flex justify-start items-center mt-8">
                        <ScrollReveal width="100%" className="w-full h-full relative">
                            {/* Main Arch Image */}
                            <div className="absolute top-0 left-0 w-[280px] h-[400px] md:w-[320px] md:h-[480px] rounded-t-full overflow-hidden bg-gray-300 z-10">
                                <Image
                                    src="/daiga.webp"
                                    alt="Connect Hero Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Smaller Circle Image */}
                            <div className="absolute -bottom-12 left-[180px] md:left-[260px] w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-lilac-lavender z-20 bg-gray-200">
                                <Image
                                    src="/lilac.webp"
                                    alt="Connect Secondary Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Right Content: Note Box */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start md:mt-48 md:pr-48">
                    <ScrollReveal delay={0.4} className="w-full max-w-4xl">
                        <div className="bg-lilac-green p-12 md:p-20 text-lilac-beige text-base md:text-xl font-sans leading-relaxed w-full shadow-lg">
                            <p>
                                <span className="font-bold block mb-4 text-xl md:text-2xl">PLEASE NOTE:</span>
                                If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
