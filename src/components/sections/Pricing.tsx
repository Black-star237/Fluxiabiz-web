"use client"

import { motion } from "framer-motion"
import { Check, Euro } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const features = [
    "5 utilisateurs inclus",
    "Jusqu'à 2 entreprises",
    "Accès à tous les modules",
    "Support prioritaire WhatsApp"
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-fluxia-green/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-fluxia-green/30 bg-fluxia-green/10 px-4 py-1.5 text-sm font-semibold text-fluxia-green mb-6"
                    >
                        Sans engagement, annulez à tout moment
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Un tarif unique, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxia-green to-teal-500">
                            zéro surprise.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-700 dark:text-slate-300"
                    >
                        Concentrez-vous sur votre croissance, nous prenons en charge le reste. Une offre complète et transparente.
                    </motion.p>
                </div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-lg mx-auto"
                >
                    <div className="bg-slate-900 shadow-2xl rounded-[2.5rem] p-8 md:p-12 border-2 border-slate-700/50 relative overflow-hidden group hover:border-fluxia-green/50 transition-colors duration-500">
                        {/* Animated Background Blobs */}
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                            <motion.div
                                animate={{
                                    y: [-60, 60, -60],
                                    x: [-40, 40, -40],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                className="absolute top-10 left-0 w-64 h-64 bg-fluxia-green/20 rounded-full blur-[80px]"
                            />
                            <motion.div
                                animate={{
                                    y: [60, -60, 60],
                                    x: [40, -40, 40],
                                    scale: [1.2, 1, 1.2],
                                }}
                                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px]"
                            />
                            <motion.div
                                animate={{
                                    y: [-30, 30, -30],
                                    x: [100, -100, 100],
                                }}
                                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                                className="absolute top-1/2 left-1/4 w-72 h-72 bg-teal-400/20 rounded-full blur-[80px]"
                            />
                        </div>

                        {/* Featured gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fluxia-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                        <div className="relative z-10 text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Offre Pro</h3>
                            <p className="text-slate-300 font-medium">L&apos;essentiel pour votre entreprise</p>

                            <div className="mt-8 flex items-baseline justify-center gap-1">
                                <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">19</span>
                                <Euro className="w-8 h-8 text-white -mt-2" />
                            </div>
                            <p className="text-slate-300 mt-2 font-medium">par mois <span className="text-slate-500">/ espace de travail</span></p>
                        </div>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-fluxia-green/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-fluxia-green" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-200 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10">
                            <Button asChild size="lg" className="w-full text-base h-14 shadow-lg shadow-fluxia-green/20 group-hover:-translate-y-1 transition-transform">
                                <Link href="/download">Télécharger maintenant</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
