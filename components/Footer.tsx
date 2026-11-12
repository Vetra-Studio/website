import FooterContact from './Footer/FooterContact';
import Navbar from './Navbar/Navbar';
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import FooterCTA from './Footer/FooterCTA';

export default function Footer() {
    const socialLinks = [
        { name: 'Instagram', href: 'https://www.instagram.com/vetrastudio_social', icon: FaInstagram },
        { name: 'X', href: 'https://x.com/Vetrastudio_/', icon: FaXTwitter },
        { name: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/vetra-studio-web/', icon: FaLinkedinIn },
    ];

    const usefulLinks = [
        { name: 'Domande Frequenti', href: '/servizi#faq' },
        { name: 'Contatti', href: '/contattaci' },
        { name: 'Presentazione Aziendale', href: '/chi-siamo#il-nostro-modo-di-lavorare' },
    ];

    return (
        <footer className="site-footer w-full text-foreground">
          <div className="p-4 sm:w-17/20 mx-auto w-full">

            <FooterCTA
                className="
                    flex flex-col items-center gap-8
                    py-12 px-4
                    text-center
                    border-t border-stroke-primary
                    footer-cta-panel
                    md:gap-10 md:py-16 md:px-8"

                ButtonClassName="
                    inline-flex items-center justify-center
                    px-6 py-4
                    text-sm font-bold uppercase tracking-wider
                    btn-gradient-orange border-2 rounded-2xl
                    shadow-lg
                    transition-all duration-300
                    hover:brightness-125
                    active:scale-95
                    select-none cursor-pointer
                    md:px-10 md:py-5 md:text-lg"
            />
          </div>

          <div className="footer-links-panel border-b border-t border-stroke-primary">
            <div className="p-4 sm:w-17/20 mx-auto w-full">
              <div className="flex-col flex justify-between py-12 lg:px-8 lg:flex-row">
                <div className="flex-col text-center space-y-4 lg:text-left">
                    <h2 className="text-5xl font-clash"><span className="font-bold">Vetra</span> Studio</h2>
                    <p className="text-xl text-light-gray-text">Creiamo Esperienze Digitali <br className="hidden lg:block" /> di Successo.</p>
                    <div className="flex space-x-4 justify-center lg:justify-between lg:space-x-0">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                               aria-label={link.name} className="pt-4 text-light-gray-text transition-colors hover:text-foreground dark:text-orange-gradient-start">
                                <link.icon aria-hidden="true" size={40} strokeWidth={1.75} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 border-y border-stroke-primary my-8 py-8 text-left
                                lg:flex lg:border-0 lg:my-0 lg:py-0 lg:w-1/3 lg:justify-between
                                ">
                    <div className="px-[10%] border-r border-stroke-primary lg:border-0 lg:px-0 space-y-4">
                        <h3 className="text-sm font-clash font-bold uppercase">Navigazione</h3>
                        <Navbar className="flex-col text-light-gray-text space-y-4" linkClassName="text-light-gray-text hover:text-foreground" />
                    </div>

                    <div className="px-[10%] space-y-4 lg:px-0">
                        <h3 className="text-sm font-clash font-bold uppercase">Link Utili</h3>
                        <ul className="space-y-4">
                            {usefulLinks.map((link) => (
                                <li key={link.name}>
                                    <Link className="text-light-gray-text hover:text-foreground" href={link.href} aria-label={link.name}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-4 flex-col flex items-center justify-center lg:block">
                    <h3 className="text-center lg:text-left text-sm font-clash font-bold uppercase">Contatti</h3>
                    <FooterContact className="flex-col flex space-y-4 lg:block"/>
                </div>
              </div>

            <div className="text-lg flex-col sm:flex-row flex justify-between items-center pb-4 pt-10 lg:px-16">
                <p className="text-light-gray-text" suppressHydrationWarning>&copy; {new Date().getFullYear()} Vetra Studio. All rights reserved.</p>
                <div className="flex">
                    <Link href="/privacy-policy" className="text-light-gray-text hover:text-foreground pr-4">Privacy Policy</Link>
                    <Link href="/cookie-policy" className="text-light-gray-text hover:text-foreground">Cookie Policy</Link>
                </div>
            </div>
          </div>
          </div>
        </footer>
    );
}
