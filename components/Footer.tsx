import FooterContact from './FooterContact';

export default function Footer() {
  return (
    <footer className="text-white p-4 w-17/20 mx-auto">
      <div className="border-b border-t border-gray-700">
        <div className="py-12 flex flex-col space-y-4 pl-4">
            <h2 className="text-[40px] font-bold">Vetra Studio</h2>
            <FooterContact />
        </div>
      </div>
      <p className="pb-4 pt-10 pl-16" >&copy; 2026 Vetra Studio. All rights reserved.</p>
    </footer>
  );
}
