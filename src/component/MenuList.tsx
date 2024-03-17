import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Form, ListGroupItem, Row } from "react-bootstrap";
import http from "../https";

interface ListGroupProps {
  menu: string[];
  heading: string;
  onSelecteItem: (item: string) => void;
}

export function MenuList() {
  const api = http();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();

    return () => {};
  }, []);

  const [selectedMenu, setSelectedMenu] = useState(-1);
  async function getMenu() {
    const { data } = await api.get("/menu");
    setMenu(data);
  }
  return (
    <>
      return (
      <Container className="mt-5">
        <Row>
          <Col xs={12} sm={4} className="mb-3">
            <Form.Select defaultValue="0">
              <option value="0" disabled>
                Menu Course
              </option>
              {types.map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col xs={12} sm={4} className="mb-3"></Col>
        </Row>
        <Row>
          <Col xs={12} sm={8}>
            <Row className="mb-3 gap-3">
              <Col xs={12} lg={3} className="d-flex">
                hs
              </Col>
              <Col xs={12} lg={3} className="d-flex">
                fd
              </Col>
              <Col xs={12} lg={3} className="d-flex">
                df
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
