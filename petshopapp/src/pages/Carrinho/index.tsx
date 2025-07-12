import { useContext } from "react"
import { CartContext } from "../../context/context"
import { FaTrash } from "react-icons/fa";

export function Carrinho(){

    const {cart} = useContext(CartContext)

    function aumentar(){

    }

    return(
        <main className="w-full p-2 h-screen flex flex-col items-center">

            {cart.length === 0 && (
                <div>
                    <h1>VAZIO</h1>
                </div>
            )}

            {cart.map((product) => (
                <div className="w-full max-w-7xl rounded shadow py-3 hover:shadow-md transition duration-300" key={product.id}>
                <div className="flex w-full relative">

                    <img className=" ml-2 mt-2 w-4/12"
                    src={product.cover} alt={product.title} />

                    <div className="pl-2">
                        <h1>{product.title}</h1>
                        <strong>-{product.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong>
                    </div>

                    <div className="absolute right-0 pr-2">
                        <h2>{product.order}</h2>
                    </div>
                </div>
                <div className="flex justify-between px-2 py-10">
                        <div><strong>-subtotal: {product.subtotal.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong></div>

                        <div>
                            <button className="bg-yellow-200 w-[25px]">
                                -
                            </button>
                            
                            <span className="px-3">
                                {product.amount}
                            </span>

                            <button className="bg-yellow-200 w-[25px]">
                                +
                            </button>
                        </div>

                        <div>
                            <FaTrash />
                        </div>
                </div>
            </div>
            ))}
        </main>
    )
}