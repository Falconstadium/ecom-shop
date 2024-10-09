import { createContext, PropsWithChildren, useReducer, ReactNode } from "react";
import cartReducer from "./cartReducer";

interface CartItem {
  id: number;
  quantity: number;
  // Add other properties as needed
}

interface CartContextType {
  cart: CartItem[] | any;
  dispatch: React.Dispatch<any>;
}

export const CartContext = createContext<CartContextType | any>(undefined);

const CartContextProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const [cart, dispatch] = useReducer(cartReducer, [] as CartItem[]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
