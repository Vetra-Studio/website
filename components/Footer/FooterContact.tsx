import { SITE } from '@/lib/site';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterContactProps {
    className?: string;
}

export default function FooterContact({ className }: FooterContactProps) {
    return (
        <div className={className}>
            <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-orange-gradient-start" />
                <p>{SITE.via}<br />{SITE.zipCode} {SITE.locality} ({SITE.province})</p>
            </div>
            <div>
                <a className="flex items-center space-x-4" href="mailto:info@vetrastudio.org" aria-label="Scrivi un'email">
                    <Mail className="w-6 h-6 text-orange-gradient-start" />
                    <p>{SITE.emails.info}</p>
                </a>
            </div>
            <div>
                <a className="flex items-center space-x-4" href="tel:+393273520087" aria-label="Chiama per richiedere un preventivo">
                    <Phone className="w-6 h-6 text-orange-gradient-start" />
                    <p >{SITE.phone}</p>
                </a>
            </div>
        </div>
    );
}