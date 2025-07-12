import { type ReactNode, createContext, useState, useEffect } from "react";
import { type ProductsProps } from "../pages/Home";


interface CartProviderProps{
    children: ReactNode;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  total: number;
  addItemCart: (newItem: ProductsProps) => void;
  calcTotal: () => void;
  removeItem: (olditem: ProductsProps) => void;
  trashItem: (binItem: ProductsProps) => void;
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
    const [total, setTotal] = useState(0)

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

    function calcTotal(){
        if(cart.length > 0){

            let productTotal = 0
            for(let i = 0; i < cart.length; i++){
                 productTotal += cart[i].subtotal 
            }

            setTotal(productTotal)
        
        }
    }

    function removeItem(olditem: ProductsProps){
        const indexItem = cart.findIndex(item => item.id === olditem.id)

        if (indexItem === -1) return;

        if(cart[indexItem].amount > 1){
            const cartList = [...cart]

            cartList[indexItem].amount += -1
            cartList[indexItem].subtotal = cartList[indexItem].subtotal - cartList[indexItem].price
            
            setCart(cartList)
            return

        }

        const update = cart.filter(item => item.id !== olditem.id)
        setCart(update)

        
    }

    function trashItem(binItem: ProductsProps){
        const bin = cart.filter(item => item.id !== binItem.id)

        setCart(bin)
    }

    useEffect(() => {
        calcTotal()
    }, [cart])

    


    return(
        <CartContext.Provider value={{
            cart,
            cartAmount: cart.length,
            total,
            addItemCart,
            calcTotal,
            removeItem,
            trashItem,
            
        }}>
            {children}
        </CartContext.Provider>
    )
}