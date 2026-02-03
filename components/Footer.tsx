import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
    return (
        <footer>
            <div className="bg-lilac-cream pt-32 pb-32 px-8 md:px-12">
                <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
                    {/* Left Column: Address */}
                    <div className="flex flex-col gap-8 w-full md:w-auto md:flex-1">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-6xl font-serif text-lilac-green font-normal tracking-tight">
                                Lilac Template
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <div className="text-lg font-sans text-lilac-green space-y-2 font-normal">
                                <p>123 Example Road</p>
                                <p>Minneapolis, MN</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="text-lg font-sans text-black space-y-2 underline decoration-black underline-offset-4 font-normal">
                                <p><Link href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">email@example.com</Link></p>
                                <p><Link href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">(555) 555-5555</Link></p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Columns: Hours & Find */}
                    <div className="flex flex-col md:flex-row gap-16 md:gap-96 w-full md:w-auto md:ml-auto">
                        {/* Middle Column: Hours */}
                        <div className="flex flex-col gap-8 md:items-start text-left">
                            <ScrollReveal delay={0.2}>
                                <h3 className="text-3xl md:text-4xl font-serif text-lilac-green font-normal tracking-tight">Hours</h3>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <div className="text-lg font-sans text-lilac-green space-y-2 font-normal">
                                    <p>Monday – Friday</p>
                                    <p>10am – 6pm</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Column: Find */}
                        <div className="flex flex-col gap-8 md:items-end text-left md:text-right">
                            <ScrollReveal delay={0.2}>
                                <h3 className="text-3xl md:text-4xl font-serif text-lilac-green font-normal tracking-tight">Find</h3>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <nav className="flex flex-col gap-4 text-lg font-sans text-black underline decoration-black underline-offset-8 font-normal">
                                    <Link href="/" className="hover:opacity-70">Home</Link>
                                    <Link href="/connect" className="hover:opacity-70">Contact</Link>
                                    <Link href="/blog" className="hover:opacity-70">Blog</Link>
                                </nav>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-lilac-beige py-10 px-8 md:px-12">
                <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-4 text-base md:text-base text-lilac-green/80 font-sans tracking-wide">
                    <div className="flex flex-wrap justify-center gap-6 underline decoration-black/50 text-black transition-all">
                        <Link href="#">Privacy & Cookies Policy</Link>
                        <Link href="#">Good Faith Estimate</Link>
                        <Link href="#">Website Terms & Conditions</Link>
                        <Link href="#">Disclaimer</Link>
                    </div>
                    <div>
                        Website Template Credits: <span className="underline cursor-pointer text-black decoration-black">Go Bloom Creative</span>
                    </div>
                    <div className="mt-2">
                        All Rights Reserved © 2024 Your Business Name Here, LLC.
                    </div>
                </div>
            </div>
        </footer>
    );
}
