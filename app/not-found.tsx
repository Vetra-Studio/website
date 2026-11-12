import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Pagina non trovata</h1>
        <p>Non è stato possibile trovare la risorsa richiesta</p>

        <Link href="/" className="btn-gradient-orange rounded-full px-5 py-2 font-bold">
          Torna alla Home
        </Link>
    </main>
  );
}
