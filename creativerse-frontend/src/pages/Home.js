import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return React.createElement(
    "div",
    { className: "home-page" },
    React.createElement(
      "header",
      { className: "home-header" },
      React.createElement("p", null, "📍 Jakarta Selatan, Indonesia"),
      React.createElement("input", { type: "text", placeholder: "Search here..." })
    ),
    React.createElement(
      "div",
      { className: "categories" },
      ["All", "Photography", "Exhibition", "Abstract", "Art"].map((cat) =>
        React.createElement("button", { key: cat, className: "category-btn" }, cat)
      )
    ),
    React.createElement(
      "div",
      { className: "art-list" },
      [1, 2, 3].map((i) =>
        React.createElement(
          "div",
          {
            key: i,
            className: "art-card",
            onClick: () => navigate("/detail"),
          },
          React.createElement("img", {
            src: "https://i.ibb.co/zSGvB3W/frame.jpg",
            alt: "Art",
          }),
          React.createElement("p", { className: "art-title" }, "Nish Art Gallery"),
          React.createElement("p", { className: "art-price" }, "Rp 5.000.000")
        )
      )
    )
  );
}

export default Home;
