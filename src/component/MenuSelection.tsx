import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

interface MenuSelectionProps {
  setSelectedMenu: React.Dispatch<React.SetStateAction<string | null>>;
}

function MenuSelection({ setSelectedMenu }: MenuSelectionProps) {
  const [types, setTypes] = useState<string[]>([]);
  const [, setFilteredTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("http://localhost:3000/types");
        const data = await response.json();
        setTypes(data);
        setFilteredTypes(data); // Initially, set filteredTypes to all types
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching types:", error);
        setIsLoading(false);
        setError(error instanceof Error ? error.message : "Unknown error");
      }
    };

    fetchTypes();
  }, []);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setSelectedMenu(item); // Set the selected menu type
    // Filter types based on the selected item
    const filtered = types.filter((type) => type === item);
    setFilteredTypes(filtered);
  };

  return (
    <div style={{ position: "sticky", top: 70, zIndex: 100 }}>
      <h3>Menu List</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <ListGroup>
            {types.map((type) => (
              <ListGroup.Item
                key={type}
                onClick={() => handleItemClick(type)}
                active={type === selectedItem}
                style={{ cursor: "pointer" }}
              >
                {type}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </div>
  );
}

export default MenuSelection;
