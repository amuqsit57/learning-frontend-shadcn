import Link from 'next/link'
import { Instagram, Facebook, Linkedin, MapPin, Phone } from 'lucide-react'

export default function Footer(){
    return(
        <footer className="bg-black text-white relative overflow-hidden">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                           
                            <h3 className="text-2xl font-bold">Shopsy</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.
                        </p>
                    </div>

                    {/* Important Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Important Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                               className="w-10 h-10 rounded-full border-2 border-gray-600 hover:border-white flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 rounded-full border-2 border-gray-600 hover:border-white flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                               className="w-10 h-10 rounded-full border-2 border-gray-600 hover:border-white flex items-center justify-center transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span>Noida, Uttar Pradesh</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Phone className="w-5 h-5" />
                                <span>+91 123456789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cityscape Background */}
            <div className="absolute bottom-[-200px] left-0 right-0 h-48 bg-gradient-to-t from-amber-500/30 to-transparent">
                <div className="absolute bottom-0 w-full h-80 bg-[url('/assets/bg.jpg')] bg-repeat-x bg-bottom opacity-60"></div>
            </div>
        </footer>
    )
}