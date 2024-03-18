import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "../component/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type OrderCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type OrderCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const OrderCartContext = createContext({} as OrderCartContext);

export function useOrderCart() {
  return useContext(OrderCartContext);
}

export function OrderCartProvider({ children }: OrderCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = async (id: number) => {
    try {
      // Fetch item details from API
      const response = await fetch(`http://localhost:3000/menu/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch item details");
      }

      // Update cart items with fetched item details
      setCartItems((currItems) => {
        const existingItem = currItems.find((item) => item.id === id);
        if (!existingItem) {
          return [...currItems, { id, quantity: 1 }];
        } else {
          return currItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <OrderCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </OrderCartContext.Provider>
  );
}
