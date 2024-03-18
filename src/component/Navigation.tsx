import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useOrderCart } from "../context/OrderCartContext";

export function Navigation() {
  const { openCart, cartQuantity } = useOrderCart();
  return (
    <>
      <Navbar expand="lg" sticky="top" className="nav" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="../../Images/logo-big-removebg-preview.png"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link to="/about" as={Link}>
                About
              </Nav.Link>
              <Nav.Link to="/menu" as={Link}>
                Menu
              </Nav.Link>
              <Nav.Link to="/services" as={Link}>
                Services
              </Nav.Link>
              <Nav.Link to="/contact" as={Link}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav.Link to="/orderSection" as={Link}>
              Order Now
            </Nav.Link>
          </Navbar.Collapse>

          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ position: "relative" }}
              variant="outline-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 256 256"
              >
                <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM231.65,74.35l-28.53,92.71A23.89,23.89,0,0,1,180.18,184H84.07A24.11,24.11,0,0,1,61,166.59L24.82,40H8A8,8,0,0,1,8,24H24.82A16.08,16.08,0,0,1,40.21,35.6L48.32,64H224a8,8,0,0,1,7.65,10.35ZM213.17,80H52.89l23.49,82.2a8,8,0,0,0,7.69,5.8h96.11a8,8,0,0,0,7.65-5.65Z"></path>
              </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
}
