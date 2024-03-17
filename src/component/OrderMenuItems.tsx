import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useOrderCart } from "../context/OrderCartContext";

type MenuItem = {
  id: number;
  menuType: string;
  drinkType?: string;
  name: string;
  description?: string;
  price: number;
  thumbnail: string;
};

export function OrderMenuItem({ id }: { id: number }) {
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useOrderCart();
  const quantity = getItemQuantity(id);

  useEffect(() => {
    fetch(`http://localhost:3000/menu${id}`)
      .then((response) => response.json())
      .then((data) => setMenuItem(data))
      .catch((error) => console.error("Error fetching menu item:", error));
  }, [id]);

  if (!menuItem) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={menuItem.thumbnail}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{menuItem.name}</span>
          <span className="ms-2 text-muted">P{menuItem.price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div
                  className="d-flex justify-content-center"
                  style={{ width: "30px" }}
                >
                  <span className="fs-3">{quantity}</span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
