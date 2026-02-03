import ScrollReveal from "../ScrollReveal";

export default function SubscribeSection() {
    return (
        <section className="w-full py-24 px-4 md:px-12 bg-[#74764B]"> {/* Olive Green background */}
            <div className="max-w-[1200px] mx-auto border border-white p-16 md:py-32 md:px-20 text-center text-white">
                <ScrollReveal width="100%">
                    <h2 className="text-5xl md:text-6xl font-serif mb-4">
                        Subscribe
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2} width="100%">
                    <p className="text-2xl mb-8 max-w-2xl mx-auto">
                        Sign up with your email address to receive news and updates.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3} width="100%">
                    <form className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-12">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full md:w-64 px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <button
                            type="button"
                            className="px-8 py-3 bg-transparent border border-white text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-colors whitespace-nowrap"
                        >
                            Sign Up
                        </button>
                    </form>
                </ScrollReveal>

                <ScrollReveal delay={0.4} width="100%">
                    <p className="text-base opacity-90">
                        We respect your privacy.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
