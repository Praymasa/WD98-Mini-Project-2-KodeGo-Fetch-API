import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { CardComponent } from "../component/CardComponent";
import { ListOfDrinks } from "../component/ListOfDrinks";
import { CrazyDrinkCard1 } from "../component/CrazyDrinkCard1";

export function Menu() {
  return (
    <>
      <Container className="mt-5 text-center">
        <h2 className="text-center mb-5">The Menu</h2>
        <p>
          "At TamMmmy Treats, we're passionate about bringing you the best in
          market-inspired cuisine. From our mouthwatering burgers to our crispy
          fries, succulent chicken wings, and loaded nachos, every dish is a
          celebration of flavor and tradition. Using only the finest
          ingredients, our chefs craft each menu item with care and attention to
          detail, ensuring that every bite is a culinary delight. Whether you're
          craving the classic comfort of a juicy burger or the bold flavors of
          our loaded nachos, you'll find something to satisfy your appetite and
          tantalize your taste buds.
        </p>
        <p>
          And because we believe in keeping things fresh and exciting, our menu
          evolves with the seasons, allowing us to showcase the best products
          available each day. So whether you're joining us for breakfast,
          dinner, or a snack to share with friends, you can always expect a
          delicious meal accompanied by the perfect pairing. Come experience the
          magic of taste as you “Treat” your “Tummy”, where every bite is a
          journey of flavor and every meal is a celebration of good food and
          good company."
        </p>
      </Container>
      <section id="wings">
        <Container className="mt-5 gap-2">
          <h2 className="text-center mb-3">Unlimited Chicken Wings</h2>
          <p className="text-center mb-3">
            Dive into a world of savory satisfaction with our succulent chicken
            wings. Crispy on the outside, tender on the inside, and drenched in
            your choice of tantalizing sauces, each bite is a flavor explosion
            that will leave you craving more. Whether you prefer classic
            buffalo, tangy barbecue, or daring flavors, our wings are sure to
            elevate your taste buds to new heights.
          </p>
        </Container>
        <Container className="m-5">
          <Row className="gap-3 ">
            <CardComponent type="Chicken Wings" />
          </Row>
        </Container>
      </section>
      <section id="burgers">
        <Container>
          <h2 className="my-5 text-center">Gourmet Burger</h2>
          <p className="text-center mb-3">
            Elevate your burger experience with our juicy, handcrafted
            creations. Made from premium beef or your choice of protein, nestled
            between soft buns and topped with a symphony of fresh toppings, our
            burgers are a true masterpiece of flavor and satisfaction. Whether
            you crave classic simplicity or bold innovation, our burgers are
            guaranteed to satisfy your cravings and leave you craving more.
          </p>
        </Container>
        <Container className="m-5">
          <Row xs={1} sm={2} md={3} className="gap-3 row">
            <CardComponent type="Burger" />
          </Row>
        </Container>
      </section>
      <section id="fries">
        <Container>
          <h2 className="mb-5 text-center">Crispy Fries</h2>
          <p className="text-center">
            Treat yourself to a side of crispy perfection with our irresistible
            fries. Hand-cut from the finest potatoes and expertly seasoned to
            crispy golden perfection, each bite is a symphony of crunch and
            flavor. Whether you enjoy them as a sidekick to your meal or indulge
            in a basket all to yourself, our fries are the ultimate comfort
          </p>
        </Container>
        <Container className="m-5">
          <Row xs={1} sm={2} md={3} className="gap-3 row">
            <CardComponent type="Fries" />
          </Row>
        </Container>
      </section>
      <section id="nachos" className="d-flexjustify-content-center m-auto">
        <Container className="text-center">
          <h2 className="mb-5">Ultimate Nachos</h2>
          <p className="mb-5">
            Embark on a crunchy adventure with our mouthwatering nachos. Piled
            high with crispy tortilla chips and smothered in layers of melted
            cheese, fresh salsa, creamy guacamole, and zesty jalapeños, every
            bite is a fiesta of flavors and textures. Perfect for sharing or
            savoring solo, our nachos are the ultimate crowd-pleaser for any
            occasion.
          </p>
        </Container>
        <Container className="m-5 d-flex justify-self-center m-auto">
          <Row xs={1} sm={2} md={3} className="gap-3 row">
            <CardComponent type="Nachos" />
          </Row>
        </Container>
        <Image
          src="./Images/nachos-tortilla-chip.png"
          className="nachos-image d-flex justify-self-center m-auto w-50 h-50 mb-5"
        ></Image>
      </section>
      <section id="combos">
        <Container className="text-center">
          <h2 className="t mb-5">Combos</h2>
          <p>
            Introducing our Ultimate Combo Platter, where all your favorites
            come together on one epic plate! This ultimate combination of fries,
            burger, and nachos on one plate enjoying as a satisfying meal all to
            yourself. Get ready to satisfy all your cravings in one delicious
            feast!
          </p>
        </Container>
        <Container className="m-5 d-flex justify-self-center m-auto">
          <Row xs={1} sm={2} md={3} className="gap-3 row">
            <CardComponent type="Combo" />
          </Row>
        </Container>
      </section>
      <section>
        <Container className="text-center">
          <h2>Drinks</h2>
          <p className="mt-5">
            Quench your thirst Refreshing sips for every craving, every
            occasion.
          </p>
        </Container>
        <Container>
          <Row>
            <Col>
              <Row className="gap-3 row mt-5">
                <h5 className="text-center">Soda</h5>
                <ListOfDrinks drinkType="Soda" />
              </Row>
              <Row className="gap-3 row mt-5">
                <h5 className="text-center">Juice</h5>
                <ListOfDrinks drinkType="Juice" />
              </Row>
              <Row className="gap-3 row mt-5 mb-5">
                <h5 className="text-center">Smoothies</h5>
                <ListOfDrinks drinkType="Smoothies" />
              </Row>
            </Col>
            <Col></Col>
            <Col>
              <Row className="gap-3 row mt-5 mb-5">
                <h5 className="text-center">Crazy Shakes</h5>
                <ListOfDrinks drinkType="Crazy Shakes" />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
