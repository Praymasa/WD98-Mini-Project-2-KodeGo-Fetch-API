import { Offcanvas, Stack } from "react-bootstrap";
import { useOrderCart } from "../context/OrderCartContext";
import { CartItem } from "./CartItems";
import { useEffect, useState } from "react";

type OrderCartProps = {
  isOpen: boolean;
};

type MenuItem = {
  id: number;
  price: number;
};

export function Cart({ isOpen }: OrderCartProps) {
  const { closeCart, cartItems } = useOrderCart();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setIsLoading(false);
        setError("Failed to fetch menu items. Please try again later.");
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Stack gap={3}>
            {cartItems.map((cartItem) => {
              const menuItem = menuItems.find(
                (item) => item.id === cartItem.id
              );
              return menuItem ? (
                <CartItem
                  key={cartItem.id}
                  {...cartItem}
                  price={menuItem.price}
                />
              ) : null;
            })}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {cartItems.reduce((total, cartItem) => {
                const menuItem = menuItems.find(
                  (item) => item.id === cartItem.id
                );
                return total + (menuItem?.price || 0) * cartItem.quantity;
              }, 0)}
            </div>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
