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
    <section className="menu-section py-5">
      <div className="container">
        {/* Category Buttons */}
        <div className="menu-categories text-center mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu-btn ${
                activeCategory === cat ? "active" : ""
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
  );
};

export default Menu;