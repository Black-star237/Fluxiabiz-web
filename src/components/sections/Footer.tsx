import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-slate-900 py-12 md:py-16 text-slate-400 mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/logo.jpg" alt="Fluxiabiz Logo" width={32} height={32} className="rounded-lg object-cover" />
                            <span className="font-bold text-xl tracking-tight text-white">
                                Fluxiabiz
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            L&apos;ERP/CRM nouvelle génération conçu pour booster les entreprises avec intégration OHADA et intelligence artificielle.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Produit</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#modules" className="hover:text-fluxia-green transition-colors">CRM & Ventes</Link></li>
                            <li><Link href="#modules" className="hover:text-fluxia-green transition-colors">Stock & Trésorerie</Link></li>
                            <li><Link href="#pricing" className="hover:text-fluxia-green transition-colors">Tarifs</Link></li>
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Mises à jour</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Entreprise</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">À Propos</Link></li>
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Carrières</Link></li>
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Légal</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Conditions d&apos;utilisation</Link></li>
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Politique de confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-fluxia-green transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Fluxiabiz. Tous droits réservés.
                    </p>

                    <div className="flex gap-4">
                        {/* Simple social icons placeholders */}
                        <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-fluxia-green hover:text-white transition-all">
                            <span className="sr-only">Twitter</span>
                            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-fluxia-green hover:text-white transition-all">
                            <span className="sr-only">LinkedIn</span>
                            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
