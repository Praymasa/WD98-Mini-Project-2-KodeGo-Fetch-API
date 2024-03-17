import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { OrderMenuItem } from "../component/OrderMenuItems.tsx";

export function OrderSection() {
  // Define an interface representing the structure of each item
  interface MenuItem {
    id: number;
    // Add other properties as needed
  }

  // Define the type for the itemsMenu array
  type ItemsMenuType = MenuItem[];

  // Use the ItemsMenuType type for the state
  const [itemsMenu, setItemsMenu] = useState<ItemsMenuType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItemsMenu(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3 className="d-flex justify-content-center my-5">Create your Order</h3>
      <Row xs={1} md={3} lg={4} className="g-3">
        {itemsMenu.map((item) => (
          <Col key={item.id}>
            {typeof item === "object" ? (
              <OrderMenuItem {...item} />
            ) : (
              <p>Invalid item</p>
            )}
          </Col>
        ))}
      </Row>
    </>
  );
}
