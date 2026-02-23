"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
                <motion.div
                    animate={{
                        y: [-60, 60, -60],
                        x: [-40, 40, -40],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-10 left-0 md:-left-20 w-96 h-96 bg-fluxia-green/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [60, -60, 60],
                        x: [40, -40, 40],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-0 md:-right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [-30, 30, -30],
                        x: [100, -100, 100],
                    }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="absolute top-60 left-1/3 w-[350px] h-[350px] bg-teal-400/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-fluxia-green/30 bg-fluxia-green/10 px-3 py-1 text-sm font-medium text-fluxia-green mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-fluxia-green mr-2 animate-pulse"></span>
                        Nouveau : Les Agents IA arrivent sur Fluxiabiz
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
                    >
                        L&apos;ERP/CRM qui propulse <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxia-green to-teal-600">
                            votre croissance
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl"
                    >
                        Gérez vos stocks, vos ventes, votre comptabilité et motivez vos équipes grâce à une plateforme unique, adaptée à l&apos;OHADA et disponible hors-ligne.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto text-base">
                            <Link href="/download">Télécharger maintenant</Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Abstract App Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 md:mt-24 relative max-w-5xl mx-auto perspective-1000"
                >
                    <div className="glass-dark rounded-[2rem] p-2 md:p-4 shadow-2xl relative border-slate-700/50">
                        {/* Window controls */}
                        <div className="flex gap-2 mb-4 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>

                        {/* Fake App Interface */}
                        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex h-[300px] md:h-[500px]">
                            {/* Sidebar */}
                            <div className="w-16 md:w-64 border-r border-slate-800 p-4 flex flex-col gap-4">
                                <div className="h-8 rounded md:w-3/4 bg-slate-800 mb-4" />
                                <div className="h-6 rounded md:w-full bg-fluxia-green/20 text-fluxia-green flex items-center px-2 text-xs font-medium" />
                                <div className="h-6 rounded md:w-5/6 bg-slate-800" />
                                <div className="h-6 rounded md:w-4/6 bg-slate-800" />
                            </div>

                            {/* Main Area */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col gap-6">
                                <div className="h-10 rounded w-1/3 bg-slate-800" />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="h-32 rounded-xl bg-slate-800/50 border border-slate-800 p-4 flex flex-col justify-end">
                                        <div className="w-2/3 h-4 bg-fluxia-green/40 rounded mt-2" />
                                    </div>
                                    <div className="h-32 rounded-xl bg-slate-800/50 border border-slate-800 p-4 flex flex-col justify-end hidden md:flex">
                                        <div className="w-3/4 h-4 bg-blue-500/40 rounded mt-2" />
                                    </div>
                                    <div className="h-32 rounded-xl bg-slate-800/50 border border-slate-800 p-4 flex flex-col justify-end hidden md:flex">
                                        <div className="w-1/2 h-4 bg-amber-500/40 rounded mt-2" />
                                    </div>
                                </div>

                                <div className="flex-1 rounded-xl bg-slate-800/50 border border-slate-800 mt-4" />
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -right-6 -bottom-6 w-32 h-32 md:w-48 md:h-48 glass rounded-2xl flex items-center justify-center border-slate-200/50 shadow-xl"
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 bg-fluxia-green rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="text-sm font-bold text-slate-900">+125%</div>
                                <div className="text-xs text-slate-500">Croissance</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
