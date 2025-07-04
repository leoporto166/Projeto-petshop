import { type ReactNode, createContext, useState } from "react";


interface CartProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({})

export function CartProvider({ children }: CartProviderProps){
    return(
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
}