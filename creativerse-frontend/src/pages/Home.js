import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // 👉 Hubungkan ke file CSS

function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "Art", icon: "🎨" },
    { name: "Photography", icon: "📸" },
    { name: "Exhibition", icon: "🖼️" },
    { name: "Animasi", icon: "🎞️" },
  ];

  const items = [
    { id: 1, title: "Nish Art Gallery", author: "Lucy", rating: 4.5, price: "Rp.2.500.000", image: "/assets/art1.jpg" },
    { id: 2, title: "Nish Art Gallery", author: "Lucy", rating: 4.5, price: "Rp.2.500.000", image: "/assets/art2.jpg" },
    { id: 3, title: "Nish Art Gallery", author: "Lucy", rating: 4.5, price: "Rp.2.500.000", image: "/assets/art3.jpg" },
    { id: 4, title: "Nish Art Gallery", author: "Lucy", rating: 4.5, price: "Rp.2.500.000", image: "/assets/art4.jpg" },
  ];

  return React.createElement(
    "div",
    { className: "home-container" },

    // Header
    React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "div",
        { className: "location" },
        "📍 Jakarta Selatan, Indo"
      ),
      React.createElement(
        "div",
        { className: "header-icons" },
        React.createElement("span", null, "🔔"),
        React.createElement("span", null, "☰")
      )
    ),

    // Search Bar
    React.createElement(
      "div",
      { className: "search-bar" },
      React.createElement("span", { className: "search-icon" }, "🔍"),
      React.createElement("input", {
        type: "text",
        placeholder: "Search for your choice",
        className: "search-input",
      })
    ),

    // Banner
    React.createElement(
      "div",
      { className: "banner" },
      React.createElement("img", { src: "/assets/banner.jpg", alt: "banner" }),
      React.createElement(
        "div",
        { className: "banner-text" },
        React.createElement("p", { className: "banner-title" }, "Check Out New Collection"),
        React.createElement("p", { className: "banner-sub" }, "50% Discount transaction"),
        React.createElement("button", { className: "banner-btn" }, "Shop Now")
      )
    ),

    // Categories
    React.createElement(
      "div",
      { className: "categories" },
      React.createElement("h2", null, "Categories"),
      React.createElement(
        "div",
        { className: "category-list" },
        categories.map((c) =>
          React.createElement(
            "div",
            { key: c.name, className: "category-item" },
            React.createElement("div", { className: "category-icon" }, c.icon),
            React.createElement("span", null, c.name)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "category-buttons" },
        ["All", "Deals", "New", "Best Sellers"].map((b, i) =>
          React.createElement(
            "button",
            { key: b, className: i === 2 ? "cat-btn active" : "cat-btn" },
            b
          )
        )
      )
    ),

    // New Section
    React.createElement(
      "div",
      { className: "new-section" },
      React.createElement("h2", null, "New"),
      React.createElement(
        "div",
        { className: "item-grid" },
        items.map((item) =>
          React.createElement(
            "div",
            { key: item.id, className: "item-card" },
            React.createElement("img", {
              src: item.image,
              alt: item.title,
              className: "item-img",
            }),
            React.createElement(
              "div",
              { className: "item-info" },
              React.createElement("h3", null, item.title),
              React.createElement("p", { className: "item-author" }, "by ", item.author),
              React.createElement(
                "div",
                { className: "item-bottom" },
                React.createElement("span", { className: "item-rating" }, "⭐ ", item.rating),
                React.createElement("span", { className: "item-price" }, item.price)
              )
            )
          )
        )
      )
    ),

    // Bottom Navigation
    React.createElement(
      "div",
      { className: "bottom-nav" },
      React.createElement("button", { onClick: () => navigate("/") }, "🏠"),
      React.createElement("button", { onClick: () => navigate("/cart") }, "🛒"),
      React.createElement("button", { onClick: () => navigate("/profile") }, "👤")
    )
  );
}

export default Home;
