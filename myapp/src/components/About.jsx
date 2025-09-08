// import "./About.css"; // optional for extra styling

const About = () => {
  return (
    <>
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="about-subtitle">Discover Your Taste</p>
            <h2 className="about-title">
              We Provide Good Food For Your Family!
            </h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in neque et nisl.
            </p>

            <div className="row g-3 mt-4">
              <div className="col-6 d-flex align-items-center">
                <img src="src/assets/icons/chef.png" alt="icon1" className="about-icon me-2" />
                <span>Best Chefs</span>
              </div>
              <div className="col-6 d-flex align-items-center">
                <img src="src/assets/icons/food-safety.png" alt="icon2" className="about-icon me-2" />
                <span>Fresh Ingredients</span>
              </div>
              <div className="col-6 d-flex align-items-center">
                <img src="src/assets/icons/platter.png" alt="icon3" className="about-icon me-2" />
                <span>Quality Meals</span>
              </div>
              <div className="col-6 d-flex align-items-center">
                <img src="src/assets/icons/tray.png" alt="icon4" className="about-icon me-2" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src="src/assets/Restaurant_Template/imgi_2_about.png"
              alt="About"
              className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section><section className="menu-hero-section d-flex align-items-center">
        <div className="container text-center">
          <p className="menu-subtitle">Our Offered Menu</p>
          <h2 className="menu-title">
            Some Trendy And Popular <br /> Courses Offered
          </h2>
        </div>
      </section>
      </>
  );
};

export default About;
