
const Services = () => {
  return (
    <>
    <section className="services-section">
      <div className="container text-center">
        <p className="section-subtitle">Services We Offer</p>
        <h2 className="section-title">Our Best Services</h2>

        <div className="services-cards">
          {/* Card 1 */}
          <div className="service-card">
            <img src="/icons/chef.png" alt="Best Chef" className="service-icon" />
            <h3>Best Chef</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <img src="/icons/food-safety.png" alt="Quality Food" className="service-icon" />
            <h3>Quality Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <img src="/icons/platter.png" alt="Perfect Cook" className="service-icon" />
            <h3>Perfect Cook</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </section>

     {/* --- Subscribe Section --- */}
      <section className="subscribe-section">
        <div className="subscribe-overlay">
          <div className="subscribe-content">
            <p className="subscribe-subtitle">Services Of Our Restaurant</p>
            <h2 className="subscribe-title">We Provide Good Food For Your Family!</h2>
            <p className="subscribe-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quaerat necessitatibus impedit voluptate tempore facilis 
              aliquid ipsum nesciunt, optio veniam, libero inventore. 
              Consectetur deleniti numquam minima. Nulla, quasi earum 
              facere quibusdam! Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Eius, fuga.
            </p>

            <form className="subscribe-form">
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
