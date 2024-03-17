import { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { useOrderCart } from "../context/OrderCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
  price: number;
};

type MenuItem = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useOrderCart();
  const [item, setItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/menu${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item details");
        }
        const data: MenuItem = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.thumbnail}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${item.price}
        </div>
      </div>
      <div> ${item.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
