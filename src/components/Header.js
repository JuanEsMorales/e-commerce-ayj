import Link from "next/link";
import MenuIcon from "./MenuIcon";
import SearchIcon from "./SearchIcon";
import WishIcon from "./WishIcon";
import UserIcon from "./UserIcon";
import ShoppingBagIcon from "./ShoppingBagIcon";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-4 bg-white shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <MenuIcon />
          <span className="text-sm">Menú</span>
        </div>
        <div className="flex items-center gap-2">
          <SearchIcon />
          <span className="text-sm">Buscar</span>
        </div>
      </div>
      <Link href="/" title="Inicio" className="flex items-center gap-2">
        <h1 className="flex text-6xl font-bold">
          A<span className="text-amber-500">&</span>J
        </h1>  
        <span className="text-xl text-center">BISUTERÍA</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/wishlist" title="Mi lista de Deseos">
          <WishIcon />
        </Link>
        <Link href="/account" title="Mi cuenta">
          <UserIcon />
        </Link>
        <Link href="/account" title="Mi carrito">
          <ShoppingBagIcon />
        </Link>
      </div>
    </header>
  );
}