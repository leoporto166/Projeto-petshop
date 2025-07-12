import { type ReactNode, createContext, useState } from "react";
import { type ProductsProps } from "../pages/Home";


interface CartProviderProps{
    children: ReactNode;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductsProps) => void
}

export interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    subtotal: number;
    amount: number;
    order: number;
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([])

    function addItemCart(newItem: ProductsProps){

        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            const cartList = [...cart]
            cartList[indexItem].amount += 1
            cartList[indexItem].subtotal = cartList[indexItem].amount * cartList[indexItem].price

            setCart(cartList)
            return

        }


        const data: CartProps ={
            ...newItem,
            amount: 1,
            price: newItem.price,
            subtotal: newItem.price * 1,
            order: cart.length + 1
            

        }

        const update = [...cart, data];
        setCart(update)

    }


    return(
        <CartContext.Provider value={{
            cart,
            cartAmount: cart.length,
            addItemCart
        }}>
            {children}
        </CartContext.Provider>
    )
}