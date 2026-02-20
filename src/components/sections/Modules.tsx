"use client"

import { motion } from "framer-motion"
import { Users, Package, Wallet, FileText, Briefcase, Bot, Megaphone, ShoppingCart } from "lucide-react"

const modules = [
    {
        id: "crm",
        name: "CRM & Ventes",
        description: "Gérez vos opportunités, de clients en prospects, pipeline des ventes et devis en un seul endroit.",
        icon: Users,
        colorClass: "text-blue-500",
        bgClass: "bg-blue-500/10",
        borderClass: "hover:border-blue-500/50"
    },
    {
        id: "stock",
        name: "Stock & POS",
        description: "Multi-entrepôts, suivi en temps réel et point de vente synchronisé (online & offline).",
        icon: Package,
        colorClass: "text-emerald-500",
        bgClass: "bg-emerald-500/10",
        borderClass: "hover:border-emerald-500/50"
    },
    {
        id: "compta",
        name: "Comptabilité",
        description: "Trésorerie, facturation automatique et intégration des règles OHADA pour la sous-région.",
        icon: Wallet,
        colorClass: "text-amber-500",
        bgClass: "bg-amber-500/10",
        borderClass: "hover:border-amber-500/50"
    },
    {
        id: "rh",
        name: "Ressources Humaines",
        description: "Fiches de paie, suivi des présences, congés et KPI de performance par employé.",
        icon: FileText,
        colorClass: "text-violet-500",
        bgClass: "bg-violet-500/10",
        borderClass: "hover:border-violet-500/50"
    },
    {
        id: "projets",
        name: "Projets & Temps",
        description: "Kanban, assignation de tâches et tracking du temps pour maximiser la rentabilité.",
        icon: Briefcase,
        colorClass: "text-teal-500",
        bgClass: "bg-teal-500/10",
        borderClass: "hover:border-teal-500/50"
    },
    {
        id: "ia",
        name: "Agents IA",
        description: "Des assistants intelligents pour répondre à vos clients ou analyser vos données (Nouveau).",
        icon: Bot,
        colorClass: "text-indigo-500",
        bgClass: "bg-indigo-500/10",
        borderClass: "hover:border-indigo-500/50"
    },
    {
        id: "marketing",
        name: "Marketing",
        description: "Créez des campagnes, gérez vos newsletters et analysez votre retour sur investissement en un clin d'œil.",
        icon: Megaphone,
        colorClass: "text-rose-500",
        bgClass: "bg-rose-500/10",
        borderClass: "hover:border-rose-500/50"
    },
    {
        id: "ecommerce",
        name: "eCommerce",
        description: "Synchronisez votre boutique en ligne avec votre stock et gérez vos commandes de bout en bout.",
        icon: ShoppingCart,
        colorClass: "text-orange-500",
        bgClass: "bg-orange-500/10",
        borderClass: "hover:border-orange-500/50"
    }
]

const containerVar = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVar = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export function Modules() {
    return (
        <section id="modules" className="py-24 bg-slate-50 relative overflow-hidden z-0">
            {/* Animated Diagonal Background */}
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute w-[140%] h-[70vh] bg-slate-900 shadow-2xl overflow-hidden"
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

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Tout ce dont vous avez besoin, <br className="hidden md:block" />
                        <span className="text-fluxia-green">dans une seule app.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Fini de jongler entre 5 logiciels différents. Fluxiabiz regroupe les outils essentiels pour piloter votre entreprise de A à Z.
                    </p>
                </div>

                <motion.div
                    variants={containerVar}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {modules.map((module) => (
                        <motion.div key={module.id} variants={itemVar}>
                            <div className={`glass h-full rounded-3xl p-8 transition-all duration-300 ${module.borderClass} hover:shadow-xl hover:-translate-y-1`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${module.bgClass}`}>
                                    <module.icon className={`w-7 h-7 ${module.colorClass}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{module.name}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {module.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
