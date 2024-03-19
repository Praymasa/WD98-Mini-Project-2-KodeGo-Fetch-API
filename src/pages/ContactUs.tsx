import { Accordion, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export function ContactUs() {
  return (
    <>
      <section>
        <h2 className="text-center mt-5">Contact Us</h2>
        <Container className="my-5">
          <Row className="gap-5 ">
            <Col>
              <Image
                src="./Images/map.jpg"
                className="w-100"
                alt="Google Map"
              />
            </Col>
            <Col>
              <h4>
                <b>Headquater:</b>
              </h4>
              <p>St. Joseph Village 6</p>
              <p>Laguna, Philippines</p>
              <p>0994 891 5602</p>
              <p>info@t-treats.com</p>
              <div>
                <h4>Carrers:</h4>
                <p>
                  For more info visit our{" "}
                  <Link to="https://www.linkedin.com/company/linkedin/jobs">
                    linkedin page
                  </Link>
                  .
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="locations" className="m-5">
        <Container>
          <Accordion defaultActiveKey="-1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Bagiuo</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Bagiuo City, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Batangas</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Batangas 1, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Batangas 2, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Cavite</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Cavite 1, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Cavite 2, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Cavite 3, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Cebu</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Cebu 1, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Cebu 2, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Davao</Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body">
                  <p className="text-start">
                    <b>St. Joseph Village 6</b>
                  </p>
                  <p className="text-start">Davao 1, Philippines</p>
                  <p className="text-start">0994 891 5602</p>
                  <p className="text-start">info@t-treats.com</p>
                </div>
              </Accordion.Body>
              <Accordion.Body>
                <div className="accordion-body">
                  <p className="text-start">
                    <b>St. Joseph Village 6</b>
                  </p>
                  <p className="text-start">Davao 2, Philippines</p>
                  <p className="text-start">0994 891 5602</p>
                  <p className="text-start">info@t-treats.com</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Negros Occidental</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Negros Occidental, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Negros Occidental 3, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Negros Occidental 2, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Negros Occidental 1, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Pasay City</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Pasay 1, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Pasay 2, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Manila</Accordion.Header>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Manila 1, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Manila 2, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Manila 3, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
              <Accordion.Body>
                <p className="text-start">
                  <b>St. Joseph Village 6</b>
                </p>
                <p className="text-start">Manila 4, Philippines</p>
                <p className="text-start">0994 891 5602</p>
                <p className="text-start">info@t-treats.com</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}
