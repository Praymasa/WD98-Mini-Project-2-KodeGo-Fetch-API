import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

interface Item {
  id: number;
  name: string;
  type: string;
  drinkType?: string;
  description: string;
  thumbnail: string;
  price: number;
}

interface CrazyDrinkCardProps {
  drinkType: string;
}

export function CrazyDrinkCard1({ drinkType }: CrazyDrinkCardProps) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Item[] = await response.json();

        const filteredItems = data.filter(
          (item) => item["drinkType"] === drinkType
        );
        setItems(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [drinkType]);

  return (
    <>
      {items.map((item) => (
        <Card key={item.id} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.thumbnail}
            alt={`Image for ${item.name}`}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>P{item.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
