import { useContext } from "react"
import { CartContext } from "../../context/context"
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Carrinho(){

    const {cart, total, addItemCart, removeItem, trashItem} = useContext(CartContext)

    return(
        <main className="w-full p-2 h-screen flex flex-col items-center">

            {cart.length === 0 && (
                <div className="w-full h-screen flex flex-col items-center">
                    <h1 className="my-2 text-xl font-bold">NADA TE ESPERA AQUI</h1>

                    <Link to={"/"}>
                        <button className="my-2 bg-yellow-300 p-2 cursor-pointer hover:scale-105 transition-all duration-200">
                            VOLTAR À HOME
                        </button>
                    </Link>
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
                        <div><strong>Subtotal: {product.subtotal.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong></div>

                        <div>
                            <button className="bg-yellow-200 w-[25px] cursor-pointer" onClick={() => removeItem(product)}>
                                -
                            </button>
                            
                            <span className="px-3">
                                {product.amount}
                            </span>

                            <button className="bg-yellow-200 w-[25px] cursor-pointer" onClick={() => addItemCart(product)}>
                                +
                            </button>
                        </div>

                        <div>
                            <button onClick={() => trashItem(product)} className="cursor-pointer">
                                <FaTrash />
                            </button>
                        </div>
                </div>
            </div>
            ))}


            {cart.length > 0 && (
                <div className="w-full py-2">
                <strong>Total: {total.toLocaleString("pt-BR", {
                    style:"currency",
                    currency:"BRL"
                })}</strong>
            </div>
        )}
        </main>
    )
}