import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative hero flex flex-col items-start justify-center gap-4 px-10 py-16">
      <h1 className="text-5xl text-center text-white">
        Murano
      </h1>
      <Link href="/products/murano" title="Ver todos los productos hechos con Murano">
        <span className="text-amber-400 text-2xl hover:text-amber-500 p-1 border-b-2 border-amber-400 hover:border-amber-500 transition-colors duration-200 ease-in-out">
          Explorar
        </span>
      </Link>
      <Image src="/images/hero.jpg" alt="Hero" fill className="absolute top-0 left-0 w-full h-full object-cover -z-10 animate-blurred-fade-in" />
    </div>
  );
}