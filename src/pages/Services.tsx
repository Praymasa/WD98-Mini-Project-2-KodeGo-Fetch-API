import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
export function Services() {
  return (
    <>
      <section className="my-5 text-white">
        <Container id="catering">
          <Row xs={1} md={2} className="p-5">
            <Col>
              <h2 className="text-white text-center">Catering Services</h2>
              <p className="text-center mt-3">
                "Bringing the feast to your festivities: Your event, our
                expertise."
              </p>
              <p className="mt-3 text-start">
                From intimate gatherings to grand celebrations, our catering
                services elevate every occasion with culinary excellence and
                impeccable service. Whether you're planning a
              </p>
              <ul>
                <li>Wedding</li>
                <li>Corporate Event</li>
                <li>Birthday Party</li>
                <li>Family Reunion</li>
                <li>and all other occasions</li>
              </ul>
              <p className="text-start mb-5">
                Our experienced team is dedicated to crafting unforgettable
                dining experiences tailored to your unique vision and taste
                preferences.
              </p>
              <a href="#catering-form" className="catering-inquire-btn">
                <b>Inquire Now!</b>
              </a>
            </Col>
            <Col>
              <Image src="./Images/catering-business_-Photo-by-Thanakorn-Ja.webp" />
            </Col>
          </Row>
        </Container>
        <Container className="text-black text-center">
          <p>
            Our pricing is flexible and tailored to your specific needs, taking
            into account both the number of guests and the selection of dishes
            chosen for your event. Whether you're hosting an intimate gathering
            or a large-scale affair, our pricing structure is designed to
            accommodate any budget while ensuring the highest quality of food
            and service. We offer transparent pricing that reflects the number
            of guests and the variety of dishes selected, allowing you to
            customize your catering package to suit your preferences and
            requirements. Rest assured, we strive to provide competitive pricing
            without compromising on the excellence of our offerings, ensuring
            that your event is both memorable and affordable.
          </p>
        </Container>
      </section>
      <section id="catering-form" className="m-5">
        <h4 className="text-center text-black">Price quotation Request</h4>
        <Container className="form-container d-block">
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text>First Name</InputGroup.Text>
              <Form.Control aria-label="First name" />
              <InputGroup.Text>Last Name</InputGroup.Text>
              <Form.Control aria-label="Last name" />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text>Contact Num</InputGroup.Text>
              <Form.Control aria-label="Contact Number" />
              <InputGroup.Text>Email Address</InputGroup.Text>
              <Form.Control aria-label="Email Address" />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Text>Date</InputGroup.Text>
              <Form.Control aria-label="Date" />
              <InputGroup.Text>Time</InputGroup.Text>
              <Form.Control aria-label="Time" />
            </InputGroup>
          </Row>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Event</option>
            <option value="1">Wedding</option>
            <option value="2">Corporate Event</option>
            <option value="3">Birthday Party</option>
            <option value="4">Family Reunion</option>
            <option value="5">
              Other occasions <small>(please state on the message)</small>
            </option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={15} placeholder="Enter Message" />
          </Form.Group>
        </Container>
      </section>
      <section id="franchising my-5">
        <Container className="text-black text-center">
          <h2 className="mb-5">Franchising</h2>
          <h4 className="mb-5">
            "Empowering Entrepreneurs, Building Dreams: Join Our Franchise
            Family Today!"
          </h4>
        </Container>
        <Container>
          <Row>
            <h2 className="mb-3">Franchise Opportunity</h2>
            <p className="text-start">
              Are you passionate about food and ready to turn your love for
              cooking into a thriving business? Welcome to TamMmmy Treats -
              where flavor meets opportunity in the world of food services.
            </p>
          </Row>
          <Row>
            <h2 className="mb-3">About Us</h2>
            <p className="text-start">
              TaMmmy Treats is a Chicken Wing powerhouse, renowned for our
              commitment to quality, innovation, and customer satisfaction. With
              [number of years] years of experience in the food industry, we've
              perfected the art of crafting delicious dishes that keep customers
              coming back for more.{" "}
              <Link to="/about">
                <small>Read more about the company</small>
              </Link>
            </p>
          </Row>
          <Row>
            <h2 className="mb-3">Why Franchise with Us?</h2>
            <ul>
              <li>
                <b>Irresistible Menu:</b> Gain access to our mouthwatering menu
                of culinary delights, featuring a diverse range of flavors and
                cuisines to satisfy every palate.
              </li>
              <li>
                <b>Proven Recipes:</b> Benefit from our tried-and-true recipes,
                developed by our team of culinary experts, ensuring consistency
                and excellence in every dish.
              </li>
              <li>
                <b>Training and Support:</b> Receive comprehensive training and
                ongoing support from our seasoned professionals, covering
                everything from kitchen operations to marketing strategies.
              </li>
              <li>
                <b>Brand Recognition:</b> Tap into the power of our established
                brand name and reputation, attracting loyal customers and
                driving traffic to your franchise location.
              </li>
              <li>
                <b>Growth Potential:</b> Seize the opportunity to capitalize on
                the growing demand for high-quality food services, with multiple
                revenue streams and expansion possibilities.
              </li>
            </ul>
          </Row>
          <Row>
            <h2>What We Offer:</h2>
            <ul>
              <li>
                <b>Turnkey Solutions:</b> We provide all the tools and resources
                you need to launch and operate a successful franchise, including
                site selection, kitchen equipment, and marketing materials.
              </li>
              <li>
                <b>Flexible Concepts:</b> Choose from a variety of franchise
                models, including food trucks, kiosks, cafes, or full-service
                restaurants, tailored to your preferences and market demand.
              </li>
              <li>
                <b>Premium Ingredients:</b> Source top-quality ingredients and
                culinary supplies through our network of trusted suppliers,
                ensuring freshness and flavor in every dish.
              </li>
              <li>
                <b>Community Engagement:</b> Become a valued member of your
                local community, enriching lives through delicious food,
                memorable dining experiences, and job opportunities.
              </li>
            </ul>
          </Row>
        </Container>
        <Container className="m-5">
          <p className="text-black text-center">
            Ready to embark on a flavorful journey with TamMmmy Treats to learn
            more about this exciting franchising opportunity and take the first
            step toward owning your own thriving food services business!
          </p>
          <Row xs={1} md={2}>
            <Col className="form-container p-5">
              <h6 className="text-center text-white mb-3">Email Us Today!</h6>
              <Row>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Full Name</InputGroup.Text>
                  <Form.Control aria-label="Full Name" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Email Address</InputGroup.Text>
                  <Form.Control aria-label="Email Address" />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Contact Number</InputGroup.Text>
                  <Form.Control aria-label="Contact Number" />
                </InputGroup>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={15}
                  placeholder="Enter Message"
                />
              </Form.Group>
            </Col>
            <Col className="text-black text-center justify-content-center align-items-center m-auto">
              <h6 className="mt-5">
                You may also visit us on head office and look for <br />
                <b>Ms.Princess Rein Ymasa</b>
              </h6>
              <p className="text-center">0994 891 5602</p>
              <p className="text-center">franchising@t-treats.com</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
