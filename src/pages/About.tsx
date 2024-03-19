import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export function About() {
  return (
    <>
      <section id="about" className="my-3">
        <Container className="container text-center text-black">
          <div className="d-flex justify-content-center m-auto">
            <div className="col-12 col-sm-10">
              <h2 className="mb-3">Our History</h2>
              <p>
                A young girl once dreamed of dining in a fine restaurant.
                However, due to her family's financial struggles, this dream
                remained but a distant aspiration for many years. It wasn't
                until she completed her studies and secured a job that her dream
                finally materialized into reality. As time marched on, she
                eventually started her own family and had children of her own.
                Every weekend, her family made it a tradition to seek joy
                outside the confines of their home, often indulging in meals at
                restaurants, especially during special occasions. However, even
                on ordinary days, they found themselves venturing out to dine,
                spurred on by the enthusiastic requests of her children. The
                simple act of sharing a meal together became a cherished
                ritual—a time to bond, laugh, and create lasting memories amidst
                the hustle and bustle of everyday life.
              </p>
              <p>
                One day, as she pondered her love for cooking and her family's
                penchant for dining out, a brilliant idea struck her. She
                realized that she could combine her passion for cooking with her
                desire to bring joy to others through delicious food. Why not
                create a place where she could showcase her culinary skills and
                offer a delightful dining experience to her community? With
                determination and a vision in mind, she embarked on the journey
                of building her own restaurant—a place where her love for
                cooking would be shared with others, one dish at a time. And
                there, in 2029 the house of Unlimited Chicken Wings was founded.
                And now has more 10 branches all over the country.
              </p>
            </div>
          </div>
        </Container>
        <Container className="text-center my-5">
          <h3 className="box d-inline text-white p-2">2019</h3>
          <p className="mt-3">
            February. First branch opened located within the City area, Laguna
          </p>
        </Container>
        <Container className="text-center my-5">
          <h3 className="box d-inline text-white p-2">2019</h3>
          <p className="mt-3 w-50 d-flex justify-self-center m-auto">
            August. Due to high volume of dinners, the store moved out to a
            bigger place and increased the number of tables to dine and
            employees to serve as well.
          </p>
        </Container>
        <Container className="text-center my-5">
          <h3 className="box d-inline text-white p-2">2020</h3>
          <p className="mt-3">
            July. Second branch was born located in Tagaytay, Cavite.
          </p>
        </Container>
        <Container className="text-center my-5">
          <h3 className="box d-inline text-white p-2">2020</h3>
          <p className="mt-3">
            Catering Service and food ordering online was then accepted and was
            able to give job for fellow riders.
          </p>
        </Container>
        <Container className="text-center my-5">
          <h3 className="box d-inline text-white p-2">2021</h3>
          <p className="mt-3">
            Catering Service and food ordering online was then accepted and was
            able to give job for fellow riders.
          </p>
        </Container>
        <Container className="text-center my-5">
          <h3 className="box d-inline text-white p-2">2022</h3>
          <p className="mt-3">
            More and more branches had been found and continued giving a
            delightful taste of joy in sharing dishes on the house. As we grow,
            we're not just expanding our business; we're enriching our
            community. Through partnerships with local farmers and suppliers,
            we're supporting sustainable agriculture and promoting economic
            growth.
          </p>
        </Container>
      </section>
      <section id="vmc" className="p-5">
        <Container className="text-white text-center">
          <Row xs={1} md={3}>
            <Col>
              <h2 className="text-center text-white mb-3">Our Mission</h2>
              <p>
                Our food hub serves as a gathering place where individuals from
                all walks of life can come together to share meals, stories, and
                experiences. We aim to cultivate a sense of belonging and
                camaraderie among our guests, fostering meaningful connections
                and friendships.
              </p>
            </Col>
            <Col></Col>
            <Col>
              <h2 className="text-center text-white mb-3">Our Vision</h2>
              <p>
                Through our unwavering commitment to culinary excellence,
                community engagement, sustainability, innovation, and
                exceptional service, we strive to bring our vision to life and
                enrich the lives of all who grace our food hub with their
                presence.
              </p>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <h2 className="text-center text-white mb-3">Core Values</h2>
              <p>
                At the core of our mission and vision is a relentless dedication
                to providing exceptional service and hospitality to every guest
                who walks through our doors. We aim to create unforgettable
                dining experiences that exceed expectations and leave a lasting
                impression on all who visit.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container id="accredited" className="m-5 p-4">
          <h2 className="text-black text-center">
            We are accredited of the following:
          </h2>
          <Row xs={2} sm={3} md={4} className="d-flex justify-content-center">
            <Col>
              <Image src="./Images/FDA.png" alt="FDA" className="mx-2" />
            </Col>
            <Col>
              <Image src="./Images/DA.png" alt="DA" className="mx-2" />
            </Col>
            <Col>
              <Image src="./Images/(DOT)..png" alt="DOT" className="mx-2" />
            </Col>
            <Col>
              <Image src="./Images/PGBC.jpg" alt="PGBH" className="mx-2" />
            </Col>
            <Col>
              <Image src="./Images/dti.png" alt="DTI" className="mx-2" />
            </Col>
            <Col>
              <Image src="./Images/HRAP.png" alt="HRAP" className="mx-2" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
