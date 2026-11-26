import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [state, setState] = useState([]);

    return (
        <CartContext.Provider value={[state,setState]} >
            {children}
        </CartContext.Provider>
    )
}
