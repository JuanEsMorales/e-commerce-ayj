import BentoItem from "./BentoItem";

const products = [
  {
    id: 1,
    name: "Murano",
    image: "/images/bentoset1.jpg",
    href: "/products/murano",
    bentoClass: "col-span-2 row-span-1"
  },
  {
    id: 2,
    name: "Mostacilla",
    image: "/images/bentoset3.jpg",
    href: "/products/mostacilla",
    bentoClass: "col-span-1 row-span-1"
  },
  {
    id: 3,
    name: "Tejido",
    image: "/images/bentoset4.webp",
    href: "/products/acero",
    bentoClass: "col-span-1 row-span-1"
  },
  {
    id: 4,
    name: "Acero",
    image: "/images/bentoset2.png",
    href: "/products/tejido",
    bentoClass: "col-span-2 row-span-2"
  }
]

export default function BentoSet() {
  return (
    <section className="mt-16 mb-16">
      <h1 className='text-center text-4xl'>
        JUEGOS DISPONIBLES
      </h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-4 h-dvh w-full p-2'>
        {
          products.map((product) => (
            <BentoItem key={product.id} product={product} />
          ))
        }
      </div>
    </section>
  )
}