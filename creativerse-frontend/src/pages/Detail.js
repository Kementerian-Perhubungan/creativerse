import React from "react";

function Detail() {
  return React.createElement(
    "div",
    { className: "detail-page" },
    React.createElement("img", {
      className: "detail-image",
      src: "https://i.ibb.co/zSGvB3W/frame.jpg",
      alt: "Art Detail",
    }),
    React.createElement("h3", null, "Nish Art Gallery"),
    React.createElement("p", null, "⭐ 4.5"),
    React.createElement(
      "p",
      null,
      "Lukisan landscape klasik dengan detail halus dan nuansa alam yang tenang..."
    ),
    React.createElement("p", { className: "detail-price" }, "Rp. 5.000.000"),
    React.createElement("button", { className: "btn-cart" }, "Add to Cart")
  );
}

export default Detail;
