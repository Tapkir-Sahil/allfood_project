import { useState } from "react";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("special");

  const categories = ["special", "breakfast", "lunch", "dinner"];

  // Example menu items (replace with real data)
  const menuItems = {
    special: [
      {
        id: 1,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$25",
        title: "Delicious Food",
        desc: "Ut enim ad minim veniam quis nostr.",
      },
      {
        id: 2,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$18",
        title: "Healthy Salad",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$22",
        title: "Italian Pasta",
        desc: "Consectetur adipiscing elit.",
      },
      {
        id: 4,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$15",
        title: "Tasty Soup",
        desc: "Sed do eiusmod tempor incididunt.",
      },
    ],
    breakfast: [
      {
        id: 1,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$25",
        title: "Delicious Food",
        desc: "Ut enim ad minim veniam quis nostr.",
      },
      {
        id: 2,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$18",
        title: "Healthy Salad",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$22",
        title: "Italian Pasta",
        desc: "Consectetur adipiscing elit.",
      },
      {
        id: 4,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$15",
        title: "Tasty Soup",
        desc: "Sed do eiusmod tempor incididunt.",
      },
    ],
    lunch: [
      {
        id: 1,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$25",
        title: "Delicious Food",
        desc: "Ut enim ad minim veniam quis nostr.",
      },
      {
        id: 2,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$18",
        title: "Healthy Salad",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$22",
        title: "Italian Pasta",
        desc: "Consectetur adipiscing elit.",
      },
      {
        id: 4,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$15",
        title: "Tasty Soup",
        desc: "Sed do eiusmod tempor incididunt.",
      },
    ],
    dinner: [
      {
        id: 1,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$25",
        title: "Delicious Food",
        desc: "Ut enim ad minim veniam quis nostr.",
      },
      {
        id: 2,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$18",
        title: "Healthy Salad",
        desc: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$22",
        title: "Italian Pasta",
        desc: "Consectetur adipiscing elit.",
      },
      {
        id: 4,
        image: "src/assets/Restaurant_Template/imgi_17_gallery2.png",
        price: "$15",
        title: "Tasty Soup",
        desc: "Sed do eiusmod tempor incididunt.",
      },
    ],
  };

  return (
    <>
      <section className="menu-section py-5">
        <div className="container">
          {/* Category Buttons */}
          <div className="menu-categories text-center mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-btn ${activeCategory === cat ? "active" : ""
                  } mx-2`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Food Items */}
          <div className="row g-4">
            {menuItems[activeCategory].map((item) => (
              <div className="col-md-6 col-lg-3" key={item.id}>
                <div className="menu-card position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid w-100"
                  />
                  <div className="menu-overlay d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="menu-price">{item.price}</p>
                    <h5 className="menu-title">{item.title}</h5>
                    <p className="menu-desc">{item.desc}</p>
                    <a href="/order" className="btn order-btn">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Restaurant Section Inside Menu */}
      <section className="about-restaurant-section mt-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="src/assets/Restaurant_Template/imgi_3_about2.png"
                alt="About Our Restaurant"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Side Text */}
            <div className="col-lg-6">
              <p className="about-restaurant-subtitle">About Our Restaurant</p>
              <h2 className="about-restaurant-title">
                We Provide Good Food For Your Family!
              </h2>
              <p className="about-restaurant-text">
                Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
                laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
                m, quis nostrud exer.
                <br />
                <br />
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected our, or randomised words which don't look even slightly
                believab If you are going to use a passage.
              </p>
              <a href="/about" className="btn about-restaurant-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book A Table Section */}
      <section className="book-table-section d-flex align-items-center">
        <div className="container text-center">
          <p className="book-subtitle">About Our Restaurant</p>
          <h2 className="book-title">Book A Table</h2>

          <form className="book-form row justify-content-center mt-4">
            {/* Person Dropdown */}
            <div className="col-md-2 col-12 mb-3">
              <select className="form-control">
                <option>Person</option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>

            {/* Date Input */}
            <div className="col-md-3 col-12 mb-3">
              <input
                type="date"
                className="form-control"
                placeholder="Date"
              />
            </div>

            {/* Time Input */}
            <div className="col-md-3 col-12 mb-3">
              <input
                type="time"
                className="form-control"
                placeholder="Time"
              />
            </div>

            {/* Book Now Button */}
            <div className="col-md-2 col-12 mb-3">
              <button type="submit" className="btn book-btn w-100">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>


    </>
  );
};

export default Menu;