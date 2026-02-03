"use client";

import dynamic from "next/dynamic";
import ScrollReveal from "../ScrollReveal";

// Dynamically import the Map component with ssr disabled
const Map = dynamic(() => import("./LeafletMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">Loading Map...</div>
});

export default function OfficeMap() {
    return (
        <section className="w-full bg-[#82824C] text-lilac-beige grid grid-cols-1 md:grid-cols-2">
            {/* Left Info */}
            <div className="p-32 md:p-40 flex flex-col justify-center gap-12">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium">
                        My Office
                    </h2>
                </ScrollReveal>

                <div className="space-y-8">
                    <ScrollReveal delay={0.2}>
                        <div>
                            <p className="text-lg md:text-xl font-sans mb-1">123 Example Street</p>
                            <p className="text-lg md:text-xl font-sans">Minneapolis, MN</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium mt-12 mb-6">
                            Hours
                        </h2>
                        <div>
                            <p className="text-lg md:text-xl font-sans mb-1">Monday – Friday</p>
                            <p className="text-lg md:text-xl font-sans">10am – 6pm</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Right Map */}
            <div className="w-full min-h-[500px] md:min-h-auto relative p-12 md:p-24 lg:p-32">
                <div className="w-full h-full shadow-2xl overflow-hidden">
                    <Map />
                </div>
            </div>
        </section>
    );
}
