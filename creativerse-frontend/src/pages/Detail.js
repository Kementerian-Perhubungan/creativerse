import React from "react";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  const product = {
    title: "Nish Art Gallery",
    category: "Art",
    rating: 4.5,
    price: "Rp. 5.000.000",
    image: "/assets/art1.jpg",
    description:
      "Lukisan lanskap klasik dalam bingkai elegan. Terinspirasi oleh keindahan pedesaan Inggris di abad ke-19. Dihasilkan dengan teknik minyak di atas kanvas menggunakan sapuan kuas halus yang menampilkan suasana hangat dan nostalgia.",
    details: [
      "Media: Lukisan minyak di atas kanvas",
      "Frame: Vintage Eropa, coklat klasik",
      "Ukuran: 70 x 90 cm",
      "Kondisi: Original, kualitas tinggi",
    ],
  };

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen bg-gradient-to-b from-[#f7ede2] to-[#ead9c1] font-serif text-[#5a4633] flex flex-col",
    },

    // --- Header back button ---
    React.createElement(
      "div",
      { className: "flex items-center justify-between px-6 py-4" },
      React.createElement(
        "button",
        {
          onClick: () => navigate("/home"),
          className: "text-2xl hover:text-[#b9976b]",
        },
        "←"
      ),
      React.createElement("h2", { className: "text-lg font-semibold" }, "Detail")
    ),

    // --- Gambar Produk ---
    React.createElement(
      "div",
      { className: "px-6" },
      React.createElement("img", {
        src: product.image,
        alt: product.title,
        className: "w-full rounded-2xl shadow-md object-cover",
      })
    ),

    // --- Informasi Produk ---
    React.createElement(
      "div",
      { className: "flex-1 overflow-y-auto px-6 py-4" },
      React.createElement(
        "div",
        { className: "mb-3" },
        React.createElement(
          "h3",
          { className: "text-lg font-semibold" },
          product.title
        ),
        React.createElement(
          "p",
          { className: "text-sm text-gray-600" },
          product.category
        ),
        React.createElement(
          "div",
          { className: "flex items-center mt-1" },
          React.createElement("span", { className: "text-yellow-500 text-lg" }, "★"),
          React.createElement(
            "span",
            { className: "ml-1 text-sm text-gray-700" },
            product.rating
          )
        )
      ),

      // --- Deskripsi ---
      React.createElement(
        "p",
        { className: "text-sm leading-relaxed mb-4" },
        product.description
      ),

      // --- Detail Produk ---
      React.createElement(
        "div",
        { className: "bg-white/60 rounded-2xl p-4 shadow-md mb-6" },
        React.createElement(
          "h4",
          { className: "font-semibold mb-2 text-sm" },
          "Detail Produk:"
        ),
        React.createElement(
          "ul",
          { className: "list-disc list-inside text-sm text-gray-700" },
          product.details.map((d, i) =>
            React.createElement("li", { key: i, className: "mb-1" }, d)
          )
        )
      )
    ),

    // --- Bagian bawah: harga + tombol ---
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
          product.price
        )
      ),
      React.createElement(
        "button",
        {
          onClick: () => navigate("/cart"),
          className:
            "bg-[#b9976b] text-white px-6 py-2 rounded-full hover:bg-[#a9865a] transition",
        },
        "Add to Cart"
      )
    )
  );
}

export default Detail;
