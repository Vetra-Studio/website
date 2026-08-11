import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Pagina non trovata</h1>
        <p>Non è stato possibile trovare la risorsa richiesta</p>

        <Link href="/">
          <button className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold py-2 px-4 rounded-lg">
              Torna alla Home
          </button>
        </Link>
    </main>
  );
}
