import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  type: string;
  drinkType?: string;
  description: string;
  thumbnail: string;
  price: number;
}

interface ListOfDrinksProps {
  drinkType: string;
}

export function ListOfDrinks({ drinkType }: ListOfDrinksProps) {
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
        <p key={item.id} className="d-flex justify-self-between m-auto">
          <span>{item.name}</span>
          <span className="ms-auto">P{item.price}</span>
        </p>
      ))}
    </>
  );
}
