import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./blogData";
import ScrollReveal from "../ScrollReveal";

export default function BlogGrid() {
    return (
        <section className="w-full py-20 px-4 md:px-12 bg-[#E8E4D9]">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                {blogPosts.map((post, index) => (
                    <ScrollReveal key={post.id} delay={index * 0.1} width="100%">
                        <div className="flex flex-col gap-4">
                            {/* Image */}
                            <Link href={`/blog/${post.id}`} className={`w-full aspect-[4/3] ${post.color} relative overflow-hidden block`}>
                                <Image
                                    src={post.imageLabel}
                                    alt={post.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </Link>

                            {/* Content */}
                            <div className="flex flex-col gap-2 mt-4">
                                <span className="text-xs font-bold tracking-widest text-lilac-green uppercase">
                                    {post.date}
                                </span>
                                <h3 className="text-4xl font-serif text-lilac-green font-normal">
                                    {post.title}
                                </h3>
                                <Link href={`/blog/${post.id}`} className="text-sm font-bold underline decoration-1 underline-offset-4 mt-2 text-lilac-green hover:opacity-70">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
