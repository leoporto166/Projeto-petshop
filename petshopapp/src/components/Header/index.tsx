import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <header className="flex w-full h-10 items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-7xl h-10 items-center justify-between p-2">
                <span className="flex">
                    <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-300 to-black font-bold text-xl bg-clip-text text-transparent">Nobre</h1>
                        <h2 className="text-black font-bold text-xl">Pet</h2>
                </span>
                <Link to={"/carrinho"}>
                    <FiShoppingCart size={18} className="text-yellow-500"></FiShoppingCart>
                </Link>
            </div>
        </header>
    )
}