const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Brand Logo */}
          <div className="col-md-3 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="/Restaurant_Template/imgi_1_logo.png" // replace with your logo path
              alt="Brand Logo"
              className="footer-logo"
            />
          </div>

          {/* Navigation */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-heading">Useful Links</h5>
            <ul className="footer-links">
              <li><a href="#">Registration</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Instagram Feed */}
          <div className="col-md-3">
            <h5 className="footer-heading">Instagram Feed</h5>
            <div className="insta-feed">
              <img src="/Restaurant_Template/imgi_8_instagram1.png" alt="insta1" />
              <img src="/Restaurant_Template/imgi_9_instagram2.png" alt="insta2" />
              <img src="/Restaurant_Template/imgi_10_instagram3.png" alt="insta3" />
              <img src="/Restaurant_Template/imgi_11_instagram4.png" alt="insta4" />
              <img src="/Restaurant_Template/imgi_12_instagram5.png" alt="insta5" />
              <img src="/Restaurant_Template/imgi_13_instagram6.png" alt="insta6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sahil Tapkir. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
