import Image from "next/image"
import Link from "next/link"
import BentoItem from "./BentoItem";

const products = [
  {
    id: 1,
    name: "Collares",
    image: "/images/bento2.webp",
    href: "/products/collares",
    bentoClass: "col-span-1 row-span-2"
  },
  {
    id: 2,
    name: "Tejido",
    image: "/images/bento3.jpg",
    href: "/products/juegos",
    bentoClass: "col-span-1 row-span-1"
  },
  {
    id: 3,
    name: "Anillos",
    image: "/images/bento4.webp",
    href: "/products/anillos",
    bentoClass: "col-span-1 row-span-2"
  },
  {
    id: 4,
    name: "Aretes",
    image: "/images/principal-bento.jpg",
    href: "/products/aretes",
    bentoClass: "col-span-1 row-span-2"
  },
  {
    id: 5,
    name: "Acero",
    image: "/images/bento5.webp",
    href: "/products/acero",
    bentoClass: "col-span-1 row-span-1"
  },
  {
    id: 6,
    name: "Pulseras",
    image: "/images/bento6.jpg",
    href: "/products/pulseras",
    bentoClass: "col-span-1 row-span-1"
  },
];

export default function BentoProducts() {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-4 h-dvh w-full p-2'>
      {
        products.map((product) => (
          <BentoItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}
