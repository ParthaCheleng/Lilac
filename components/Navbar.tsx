"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm flex justify-center ${pathname === "/connect" ? "bg-lilac-lavender/90" :
                pathname?.startsWith("/blog/") ? "bg-lilac-beige/90" :
                    "bg-lilac-cream/90"
                }`}
        >
            <div className="flex justify-between items-center py-6 px-8 md:px-12 max-w-[1920px] mx-auto w-full">
                <div className="text-3xl md:text-4xl font-serif font-medium tracking-wider text-lilac-green ml-4 md:ml-6">
                    Lilac Template
                </div>
                <div className="flex gap-16 text-lilac-green text-lg md:text-xl font-medium tracking-normal mr-4 md:mr-6">
                    <Link
                        href="/blog"
                        className={`hover:opacity-70 transition-opacity ${pathname === '/blog' || pathname?.startsWith('/blog/') ? 'border-b-2 border-lilac-green' : ''}`}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/connect"
                        className={`hover:opacity-70 transition-opacity ${pathname === '/connect' ? 'border-b-2 border-lilac-green' : ''}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
