import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { OrderMenuItem } from "../component/OrderMenuItems.tsx";
import MenuSelection from "../component/MenuSelection.tsx";
import "./OrderSection.css";

export function OrderSection() {
  // Define an interface representing the structure of each item
  interface MenuItem {
    id: number;
  }

  // Define the type for the itemsMenu array
  type ItemsMenuType = MenuItem[];
  interface MenuItem {
    id: number;
    type: string; // Add the type property
  }

  // Use the ItemsMenuType type for the state
  const [itemsMenu, setItemsMenu] = useState<ItemsMenuType>([]);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu/");
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
      <Container>
        <Row className="OrderSection">
          <Col xs={12} sm={3}>
            <MenuSelection setSelectedMenu={setSelectedMenu} />
          </Col>
          <Col>
            <h3 className="d-flex justify-content-center my-5">
              Create your Order
            </h3>
            <Row xs={1} sm={2} lg={3} className="g-3">
              {itemsMenu
                .filter((item) =>
                  selectedMenu ? item.type === selectedMenu : true
                )
                .map((item) => (
                  <Col key={item.id}>
                    <OrderMenuItem thumbnail={""} {...item} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
