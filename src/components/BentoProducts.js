import Image from "next/image";

export default function BentoProducts() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 h-dvh w-full p-2">
      <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
        <img src="/images/bento2.webp" alt="Product 1" className="object-fit w-full" />
      </div>
      <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
        <img src="/images/bento3.jpg" alt="Product 2" className="object-fit w-full" />
      </div>
      <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
        <img src="/images/bento4.webp" alt="Product 2" className="object-fit w-full" />
      </div>
      <div className="col-span-1 row-span-2 rounded-lg overflow-hidden">
        <img src="/images/principal-bento.jpg" alt="Product 2" className="object-fit w-full" />
      </div>
      <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
        <img src="/images/bento5.webp" alt="Product 2" className="object-fit w-full" />
      </div>
      <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
        <img src="/images/bento6.jpg" alt="Product 2" className="object-fit w-full" />
      </div>
    </div>
  )
}