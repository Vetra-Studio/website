export default function Header() {
  return (
    <div className="flex items-center justify-between p-12 border-b border-gray-700">
      <h1 className="text-3xl font-bold">Vetra Studio</h1>
      <div className="mt-2">
        <ul className="flex space-x-20">
          <li>
            <a className="hover:underline hover:decoration-orange-500 hover:underline-offset-4 hover:cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a className="hover:underline hover:decoration-orange-500 hover:underline-offset-4 hover:cursor-pointer">
              Servizi
            </a>
          </li>
          <li>
            <a className="hover:underline hover:decoration-orange-500 hover:underline-offset-4 hover:cursor-pointer">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:underline hover:decoration-orange-500 hover:underline-offset-4 hover:cursor-pointer">
              Chi siamo
            </a>
          </li>
          <li>
            <a className="hover:underline hover:decoration-orange-500 hover:underline-offset-4 hover:cursor-pointer">
              Contatti
            </a>
          </li>
        </ul>
      </div>
      <button className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-4 px-8 rounded-lg text-lg">
        Contattaci
      </button>
    </div>
  );
}