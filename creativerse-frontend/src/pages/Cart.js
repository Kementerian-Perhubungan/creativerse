import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  // Dummy data keranjang
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: "Classic Charm", price: 300000, image: "/assets/art2.jpg", selected: true },
    { id: 2, name: "Classic Charm", price: 450000, image: "/assets/art3.jpg", selected: false },
    { id: 3, name: "Nish Art Gallery", price: 5000000, image: "/assets/art1.jpg", selected: true },
  ]);

  // Toggle checkbox item
  const toggleSelect = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Hitung total harga
  const total = cartItems
    .filter((i) => i.selected)
    .reduce((sum, i) => sum + i.price, 0)
    .toLocaleString("id-ID");

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen bg-gradient-to-b from-[#f7ede2] to-[#ead9c1] font-serif text-[#5a4633] flex flex-col",
    },

    // --- Header ---
    React.createElement(
      "div",
      { className: "flex items-center justify-between px-6 py-4" },
      React.createElement(
        "button",
        { onClick: () => navigate("/home"), className: "text-2xl hover:text-[#b9976b]" },
        "←"
      ),
      React.createElement("h2", { className: "text-lg font-semibold" }, "Keranjang"),
      React.createElement("div", { className: "w-6" }) // spacer biar simetris
    ),

    // --- Daftar Item ---
    React.createElement(
      "div",
      { className: "flex-1 overflow-y-auto px-6 pb-6" },
      cartItems.map((item) =>
        React.createElement(
          "div",
          {
            key: item.id,
            className:
              "flex items-center bg-white/70 rounded-2xl shadow mb-4 p-3 hover:shadow-md transition",
          },
          // Checkbox
          React.createElement("input", {
            type: "checkbox",
            checked: item.selected,
            onChange: () => toggleSelect(item.id),
            className: "w-5 h-5 mr-3 accent-[#b9976b]",
          }),
          // Gambar
          React.createElement("img", {
            src: item.image,
            alt: item.name,
            className: "w-16 h-16 rounded-lg object-cover mr-3",
          }),
          // Info produk
          React.createElement(
            "div",
            { className: "flex-1" },
            React.createElement("p", { className: "font-medium text-sm" }, item.name),
            React.createElement(
              "p",
              { className: "text-xs text-gray-600" },
              "Rp. " + item.price.toLocaleString("id-ID")
            )
          ),
          // Tombol edit (dummy)
          React.createElement(
            "button",
            {
              className:
                "text-[#b9976b] border border-[#b9976b] px-2 py-1 text-xs rounded-full hover:bg-[#b9976b] hover:text-white",
            },
            "✎"
          )
        )
      )
    ),

    // --- Bagian bawah total + tombol pesan ---
    React.createElement(
      "div",
      {
        className:
          "px-6 py-4 bg-white/70 shadow-inner flex justify-between items-center",
      },
      React.createElement(
        "div",
        null,
        React.createElement("p", { className: "text-sm text-gray-600" }, "Total"),
        React.createElement(
          "p",
          { className: "text-lg font-semibold text-[#5a4633]" },
          "Rp. " + total
        )
      ),
      React.createElement(
        "button",
        {
          onClick: () => navigate("/payment"),
          className:
            "bg-[#b9976b] text-white px-6 py-2 rounded-full hover:bg-[#a9865a] transition",
        },
        "Pesan"
      )
    )
  );
}

export default Cart;
