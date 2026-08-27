import FooterCTA from './Footer/FooterCTA';
import FooterContact from './Footer/FooterContact';
import Navbar from './Navbar/Navbar';
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
        <footer className="p-4 sm:w-17/20 mx-auto w-full">
            

            <FooterCTA className="py-12 px-4 md:py-16 md:px-8
                                  border-y border-gray-700
                                  bg-background
                                  flex flex-col
                                  items-center text-center
                                  gap-8 md:gap-10
                                  "/>

            <div className="border-b border-t border-gray-700">
            <div className="flex-col flex justify-between py-8 lg:px-8 lg:flex-row">
                <div className="flex-col text-center space-y-4 lg:text-left">
                    <h2 className="text-2xl md:text-5xl"><span className="font-bold">Vetra</span> Studio</h2>
                    <p className="text-xl text-gray-400">Creiamo Esperienze Digitali <br /> di Successo.</p>
                    <div className="flex space-x-4 justify-center lg:justify-between lg:space-x-0">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-white pt-4">
                                <Image src={link.icon} alt={link.name} width={40} height={40} className="size-7 md:size-10"/>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr]
                                border-y-2 border-gray-700
                                my-8 py-8
                                text-left
                                lg:flex
                                lg:border-0
                                lg:my-0 lg:py-0
                                lg:w-1/3
                                lg:justify-between
                                ">
                    <div className="justify-self-center border-gray-700 pr-8 lg:pr-0 lg:border-0 space-y-4">
                        <h3 className="text-lg font-bold uppercase">Navigazione</h3>
                        <Navbar className="flex-col text-gray-400 space-y-4" linkClassName="text-gray-400 hover:text-gray-200" />
                    </div>

                    <span className="h-full border-r-2 border-gray-700 lg:hidden"></span>

                    <div className="justify-self-center space-y-4 pl-8 lg:pl-0">
                        <h3 className="text-lg font-bold uppercase">Link Utili</h3>
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
                </div>

                <div className="space-y-4 flex-col flex items-center justify-center lg:block">
                    <h3 className="text-left text-lg font-bold uppercase">Contatti</h3>
                    <FooterContact className="flex-col flex space-y-4 lg:block"/>
                </div>
            </div>
            </div>

            <div className="flex-col sm:flex-row flex justify-between items-center pb-4 pt-10 lg:px-16">
                <p className="text-gray-400" suppressHydrationWarning>&copy; {new Date().getFullYear()} Vetra Studio. All rights reserved.</p>
                <div className="flex">
                    <Link href="/privacy" className="text-gray-400 hover:text-gray-200 pr-4">Privacy Policy</Link>
                    <Link href="/cookie-policy" className="text-gray-400 hover:text-gray-200">Cookie Policy</Link>
                </div>
            </div>

        </footer>
        );
    }
