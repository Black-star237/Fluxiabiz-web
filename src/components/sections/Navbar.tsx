"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20)
    })

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div
                    className={`flex items-center justify-between rounded-full px-6 py-3 transition-colors duration-300 ${isScrolled ? "glass-dark border border-slate-700/50" : "bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.jpg" alt="Fluxiabiz Logo" width={32} height={32} className="rounded-lg object-cover" />
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                            Fluxiabiz
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-fluxia-green dark:hover:text-fluxia-green transition-colors">
                            Fonctionnalités
                        </a>
                        <a href="#modules" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-fluxia-green dark:hover:text-fluxia-green transition-colors">
                            Modules
                        </a>
                        <a href="#pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-fluxia-green dark:hover:text-fluxia-green transition-colors">
                            Tarifs
                        </a>
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">Connexion</Button>
                        <Button asChild>
                            <Link href="/download">Télécharger maintenant</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-900 dark:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 glass-dark border border-slate-700/50 rounded-3xl flex flex-col gap-4 text-center shadow-xl"
                    >
                        <a href="#features" className="py-2 text-slate-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Fonctionnalités
                        </a>
                        <a href="#modules" className="py-2 text-slate-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Modules
                        </a>
                        <a href="#pricing" className="py-2 text-slate-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Tarifs
                        </a>
                        <div className="h-px bg-slate-700/50 my-2" />
                        <Button variant="outline" className="w-full justify-center border-slate-600 text-white hover:bg-slate-700">Connexion</Button>
                        <Button asChild className="w-full justify-center">
                            <Link href="/download">Télécharger maintenant</Link>
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}
