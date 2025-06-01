import Link from "next/link";

export default function BentoItem({ product }) {
  return (
    <div className={`${product.bentoClass} group rounded-lg overflow-hidden flex flex-col gap-4 justify-center items-center relative bg-black/20 hover:bg-black/60 transition-colors duration-200 ease-in-out`}>
      <h1 className='z-0 text-center text-white text-4xl translate-y-4 group-hover:translate-y-0 transition-all duration-200 ease-in-out'>
        {product.name}
      </h1>
      <Link
        href={product.href}
        title='Ver todos los productos en nuestra colección'
        className='translate-y-9 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-in-out'
      >
        <span className='text-amber-400 text-2xl hover:text-amber-500 p-1 border-b-2 border-amber-400 hover:border-amber-500 transition-colors duration-200 ease-in-out'>
          Explorar
        </span>
      </Link>
      <img
        src={product.image}
        alt={product.name}
        className='absolute top-0 left-0 w-full h-full object-cover -z-10 w-full group-hover:scale-150 transition-transform duration-200 ease-in-out'
      />
    </div>
  )
}
    