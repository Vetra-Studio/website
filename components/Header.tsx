import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-12 border-b border-gray-700">
      <h1 className="text-3xl font-bold">Vetra Studio</h1>
      <Navbar className="flex space-x-8" />
      <button className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-4 px-8 rounded-lg text-lg">
        Contattaci
      </button>
    </div>
  );
}