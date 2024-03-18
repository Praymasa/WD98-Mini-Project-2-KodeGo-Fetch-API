import "./Home.css";

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
              <h6>
                "Indulge in Winged Wonders, Nacho Nirvana, Burger Bliss, and
                Fries Fiesta at Our Flavorful Food Hub!"
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>HO</h1>
      </section>
    </>
  );
}
