import Image from 'next/image'
import LocationIcon from '@/public/location.svg'
import EmailIcon from '@/public/email.svg'
import PhoneIcon from '@/public/phone.svg'


export default function FooterContact() {
    return (
        <div className="flex-col space-y-4">
            <div className="flex items-center space-x-4">
                <Image src={LocationIcon} alt=""/>
                <p className="">Via Papa Luciani 14 <br /> 36025 Noventa Vicentina (VI)</p>
            </div>
            <div>
                <a className="flex items-center space-x-4" href="mailto:info@vetrastudio.org" aria-label="Scrivi un'email">
                    <Image src={EmailIcon} alt=""/>
                    <p className="">info@vetrastudio.org</p>
                </a>
            </div>
            <div>
                <a className="flex items-center space-x-4" href="tel:+393273520087" aria-label="Chiama per richiedere un preventivo">
                    <Image src={PhoneIcon} alt=""/>
                    <p className="">+39 327 352 0087</p>
                </a>
            </div>
        </div>
    );
}