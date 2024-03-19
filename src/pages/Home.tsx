import "./Home.css";
import "./responsive.css";

export function Home() {
  return (
    <>
      <section id="home" className="overlay">
        <div className="container text-center text-black d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 welcome-page pb-3">
              <img
                src="./Images/logo-big-removebg-preview.png"
                alt="Logo"
                className="logo"
              />
              <h2 className="text-black">
                "Where Flavor Meets Community: Uniting Palates, One Bite at a
                Time!"
              </h2>
              <h5>
                "Indulge in Winged Wonders, Nacho Nirvana, Burger Bliss, and
                Fries Fiesta at Our Flavorful Food Hub!"
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section id="inspiration" className="my-5">
        <div className="container text-center text-black d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10">
              <h2 className="mb-5">Our Inspiration</h2>
              <p>
                Building a food hub business is not just about serving food;
                it's about creating a community around culinary experiences.
              </p>
              <p>
                Inspired by a love for food and a passion for bringing people
                together, our journey began with a simple idea: to create more
                than just a place to eat, but a vibrant hub where culinary
                creativity meets community connection. With each dish we serve,
                we aim to tantalize taste buds and ignite conversations. From
                sizzling burgers to crispy fries, succulent chicken wings to
                loaded nachos, every item on our menu is a testament to our
                commitment to quality, flavor, and innovation.
              </p>
              <p>
                But our vision extends far beyond the kitchen. We're building
                more than just a restaurant; we're cultivating a space where
                friends gather, families bond, and strangers become neighbors
                over a shared love of great food. As we grow, we're not just
                expanding our business; we're enriching our community. Through
                partnerships with local farmers and suppliers, we're supporting
                sustainable agriculture and promoting economic growth.
              </p>
              <p>
                And through events, workshops, and cooking classes, we're
                inspiring the next generation of chefs and food enthusiasts to
                explore their passion and unleash their creativity. At the heart
                of it all is our belief that food has the power to nourish not
                just our bodies, but our souls. And as we continue on this
                journey, we invite you to join us in celebrating the joy of good
                food, good company, and good times."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
