import FooterContact from './FooterContact';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="p-4 w-17/20 mx-auto">

      <div className="border-b border-t border-gray-700">
        <div className="flex justify-between py-12 px-8">
          <div className="flex-col space-y-4">
              <h2 className="text-5xl"><span className="font-bold">Vetra</span> Studio</h2>
              <p className="text-xl text-gray-400">Creaiamo Esperienze Digitali<br /> di Successo.</p>
              <div className="flex space-x-4">
                  <a href="https://www.instagram.com/vetrastudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Image src="/instagram.svg" alt="Instagram" width={48} height={48} />
                  </a>
                  <a href="https://www.x.com/company/vetra-studio/" target="_blank" rel="noopener noreferrer" aria-label="X">
                      <Image src="/x.svg" alt="X" width={48} height={48} />
                  </a>
                  <a href="https://www.facebook.com/vetrastudio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Image src="/facebook.svg" alt="Facebook" width={48} height={48} />
                  </a>
                  <a href="https://www.linkedin.com/company/vetra-studio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Image src="/linkedin.svg" alt="LinkedIn" width={48} height={48} />
                  </a>
              </div>
          </div>

          <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase">Navigazione</h3>
              <Navbar className="flex-col text-gray-400 space-y-4" />
          </div>

          <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase">Link Utili</h3>
              <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white">Termini e Condizioni</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Informativa sulla Privacy</a></li>
              </ul>
          </div>

          <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase">Contatti</h3>
              <FooterContact />
          </div>
        </div>
      </div>
      <p className="pb-4 pt-10 pl-16" >&copy; {new Date().getFullYear()} Vetra Studio. All rights reserved.</p>
    </footer>
  );
}
