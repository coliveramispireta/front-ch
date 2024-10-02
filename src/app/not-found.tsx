import Link from "next/link";



 
export default function NotFound() {
  return (
    <div className="flex flex-col mt-[10%]">
    <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        ¡Error 404!
      </h1>
      <p className="text-gray-700 mb-4">
        Página no encontrada.
      </p>
      <Link href="/" className="text-blue-500">
        Regresar al inicio
      </Link>
    </main>
  </div>
  )
}