import FooterContact from './FooterContact';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link'

import FacebookIcon from '@/public/facebook.svg'
import InstagramIcon from '@/public/instagram.svg'
import LinkedinIcon from '@/public/linkedin.svg'
import XIcon from '@/public/x.svg'

export default function Footer() {
    const socialLinks = [
        { name: 'Instagram', href: 'https://www.instagram.com/vetrastudio', icon: InstagramIcon },
        { name: 'X', href: 'https://www.x.com/company/vetra-studio/', icon: XIcon },
        { name: 'Facebook', href: 'https://www.facebook.com/vetrastudio', icon: FacebookIcon },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/vetrastudio', icon: LinkedinIcon },
    ];

    const usefulLinks = [
        { name: 'Domande Frequenti', href: '/faq' },
        { name: 'Contatti', href: '/contatti' },
        { name: 'Presentazione Aziendale', href: '/presentazione' },
    ];

    return (
        <footer className="p-4 w-17/20 mx-auto">

            <div className="border-b border-t border-gray-700">
            <div className="flex justify-between py-12 px-8">
                <div className="flex-col space-y-4">
                    <h2 className="text-5xl"><span className="font-bold">Vetra</span> Studio</h2>
                    <p className="text-xl text-gray-400">Creaiamo Esperienze Digitali<br /> di Successo.</p>
                    <div className="flex space-x-6">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-white pt-4">
                                <Image src={link.icon} alt={link.name} width={40} height={40} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase">Navigazione</h3>
                    <Navbar className="flex-col text-gray-400 space-y-4" linkClassName="text-gray-400 hover:text-gray-200" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase">Link Utili</h3>
                    <ul className="space-y-4">
                        {usefulLinks.map((link) => (
                            <li key={link.name}>
                                <Link className="text-gray-400 hover:text-gray-200" href={link.href} target="_blank" aria-label={link.name}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase">Contatti</h3>
                    <FooterContact />
                </div>
            </div>
            </div>

            <div className="flex justify-between items-center pb-4 pt-10 px-16">
                <p className="text-gray-400" suppressHydrationWarning>&copy; {new Date().getFullYear()} Vetra Studio. All rights reserved.</p>
                <div>
                    <Link href="/privacy" className="text-gray-400 hover:text-gray-200 pr-4">Privacy Policy</Link>
                    <Link href="/terms" className="text-gray-400 hover:text-gray-200">Cookie Policy</Link>
                </div>
            </div>

        </footer>
        );
    }
