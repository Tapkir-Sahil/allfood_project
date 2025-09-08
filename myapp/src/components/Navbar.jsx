const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="./Restaurant_Template/imgi_1_logo.png"
            alt="All Food"
            className="brand-logo"
          />
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center custom-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a className="btn ordernav-btn px-4 py-2 rounded" href="/order">
                Order Online
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;