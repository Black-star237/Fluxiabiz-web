"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute inset-0 bg-slate-900 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fluxia-green/20 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="glass-dark border-slate-700/50 rounded-[2.5rem] p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl overflow-hidden relative"
                >
                    {/* Subtle noise texture or inner gradient could go here */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Prêt à transformer votre entreprise ?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                            Rejoignez des centaines d&apos;entreprises qui utilisent Fluxiabiz pour digitaliser leurs opérations et accélérer leur croissance.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-fluxia-green/20 group">
                                <Link href="/download">
                                    Télécharger maintenant
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                        <p className="mt-8 text-sm text-slate-400">
                            Assistance technique et formation incluses.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
