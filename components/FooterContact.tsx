import Image from 'next/image'

export default function FooterContact() {
    return (
        <div className="flex flex-col space-y-4 ">
            <div className="flex items-center space-x-4">
                <Image src="/location.svg" alt="Location Icon" width={24} height={24} />
                <p className="">Via Papa Luciani 14, 36025 Noventa Vicentina (VI)</p>
            </div>
            <div className="flex items-center space-x-4">
                <Image src="/email.svg" alt="Email Icon" width={24} height={24} />
                <p className="">riccardo.rossato07@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
                <Image src="/phone.svg" alt="Phone Icon" width={24} height={24} />
                <p className="">+39 327 3520087</p>
            </div>
        </div>
    );
}