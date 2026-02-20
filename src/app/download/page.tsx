"use client"

import { motion } from "framer-motion"
import { Apple, Monitor, Smartphone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import Link from "next/link"

const platforms = [
    {
        id: "android",
        name: "Android",
        icon: Smartphone,
        description: "L'application mobile complète pour Android 8.0+",
        available: true,
        version: "1.0.4",
        size: "34 MB"
    },
    {
        id: "ios",
        name: "iOS (iPhone & iPad)",
        icon: Apple,
        description: "L'application optimisée pour l'écosystème Apple",
        available: false,
        version: "Bientôt disponible",
        size: "-"
    },
    {
        id: "windows",
        name: "Windows",
        icon: Monitor,
        description: "Client lourd pour Windows 10 & 11",
        available: false,
        version: "Bientôt disponible",
        size: "-"
    },
    {
        id: "macos",
        name: "macOS",
        icon: Apple,
        description: "Application native pour processeurs Intel et Apple Silicon",
        available: false,
        version: "Bientôt disponible",
        size: "-"
    }
]

export default function DownloadPage() {
    return (
        <main className="min-h-screen flex flex-col pt-24 bg-slate-50 relative overflow-hidden">
            <Navbar />

            {/* Animated Diagonal Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: -6 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute w-[140%] h-[60vh] bg-slate-900 shadow-2xl overflow-hidden"
                >
                    {/* Floating animated blobs inside the band for the color theme */}
                    <motion.div
                        animate={{
                            y: [-60, 60, -60],
                            x: [-40, 40, -40],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-fluxia-green/60 blur-[60px]"
                    />
                    <motion.div
                        animate={{
                            y: [60, -60, 60],
                            x: [40, -40, 40],
                            scale: [1.2, 1, 1.2],
                        }}
                        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/50 blur-[80px]"
                    />
                    <motion.div
                        animate={{
                            y: [-30, 30, -30],
                            x: [100, -100, 100],
                        }}
                        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                        className="absolute top-[30%] left-[40%] w-[350px] h-[350px] rounded-full bg-teal-400/40 blur-[70px]"
                    />

                    {/* Animated Overlay Pattern (Dots) */}
                    <motion.div
                        animate={{
                            backgroundPosition: ["0px 0px", "48px 48px"],
                            opacity: [0.1, 0.25, 0.1]
                        }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px]"
                    />
                </motion.div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center rounded-full border border-fluxia-green/30 bg-fluxia-green/10 px-4 py-1.5 text-sm font-semibold text-fluxia-green mb-6"
                    >
                        Téléchargements
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Emportez Fluxiabiz <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxia-green to-teal-500">
                            partout avec vous.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 mb-8"
                    >
                        Accédez à vos données et gérez votre entreprise depuis n&apos;importe quel appareil, que vous soyez au bureau ou en déplacement.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {platforms.map((platform, idx) => (
                        <motion.div
                            key={platform.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            className={`glass h-full rounded-[2rem] p-6 md:p-8 border-2 transition-all duration-300 ${platform.available ? 'border-fluxia-green/30 hover:shadow-xl hover:-translate-y-1 hover:border-fluxia-green/50' : 'border-slate-200/50 opacity-80'}`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${platform.available ? 'bg-fluxia-green/10 text-fluxia-green' : 'bg-slate-100 text-slate-400'}`}>
                                    <platform.icon className="w-7 h-7" />
                                </div>
                                {!platform.available && (
                                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                                        Coming soon
                                    </span>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                            <p className="text-slate-600 mb-6 h-12">{platform.description}</p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                                <div className="text-sm text-slate-500 flex flex-col gap-1">
                                    <span>Version : <strong className="text-slate-700">{platform.version}</strong></span>
                                    <span>Taille : <strong className="text-slate-700">{platform.size}</strong></span>
                                </div>
                                {platform.available ? (
                                    <Button className="shrink-0 group" asChild>
                                        <a href="https://txfmthbkxnotbamljuxg.supabase.co/storage/v1/object/public/apps/fluxiabiz-android-1.0.4.apk" download>
                                            Télécharger
                                            <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                        </a>
                                    </Button>
                                ) : (
                                    <Button variant="secondary" disabled className="shrink-0 cursor-not-allowed">
                                        Indisponible
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}
