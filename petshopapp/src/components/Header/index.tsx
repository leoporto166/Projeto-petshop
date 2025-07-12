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
                <Link to={"/carrinho"}
                className="relative pr-2">
                    <FiShoppingCart size={25} className=""></FiShoppingCart>
                    <span className="absolute -top-1.5 -right-1 px-2.5
                    rounded-full w-6 h-6 flex items-center justify-center text-white bg-yellow-300">0</span>
                </Link>
            </div>
        </header>
    )
}