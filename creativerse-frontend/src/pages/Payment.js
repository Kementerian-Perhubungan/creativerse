import React from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  // State metode pembayaran
  const [method, setMethod] = React.useState("gpay");

  const paymentMethods = [
    { id: "gpay", label: "Google Pay", icon: "/assets/gpay.png" },
    { id: "visa", label: "VISA", icon: "/assets/visa.png" },
    { id: "bank", label: "Bank Transfer", icon: "/assets/bank.png" },
  ];

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
        { onClick: () => navigate("/cart"), className: "text-2xl hover:text-[#b9976b]" },
        "←"
      ),
      React.createElement("h2", { className: "text-lg font-semibold" }, "Pembayaran"),
      React.createElement("div", { className: "w-6" })
    ),

    // --- Form Alamat ---
    React.createElement(
      "div",
      { className: "px-6 mt-2 flex-1 overflow-y-auto pb-6" },
      React.createElement(
        "h3",
        { className: "text-md font-semibold mb-2" },
        "Alamat Pengiriman"
      ),
      React.createElement("textarea", {
        rows: 3,
        placeholder: "Jl. Melati No. 10, Jakarta Selatan",
        className:
          "w-full p-3 rounded-2xl border border-[#d9c4a3] bg-white/70 focus:outline-none focus:ring-1 focus:ring-[#b9976b] mb-6",
      }),

      // --- Pilihan Metode Pembayaran ---
      React.createElement(
        "h3",
        { className: "text-md font-semibold mb-3" },
        "Pilih Metode Pembayaran"
      ),
      React.createElement(
        "div",
        { className: "space-y-3" },
        paymentMethods.map((m) =>
          React.createElement(
            "div",
            {
              key: m.id,
              onClick: () => setMethod(m.id),
              className:
                "flex items-center justify-between p-3 rounded-2xl bg-white/70 shadow cursor-pointer hover:bg-[#f0e3d3] transition " +
                (method === m.id ? "ring-2 ring-[#b9976b]" : ""),
            },
            React.createElement(
              "div",
              { className: "flex items-center space-x-3" },
              React.createElement("img", {
                src: m.icon,
                alt: m.label,
                className: "w-8 h-8 object-contain",
              }),
              React.createElement("span", { className: "text-sm" }, m.label)
            ),
            React.createElement("input", {
              type: "radio",
              checked: method === m.id,
              onChange: () => setMethod(m.id),
              className: "accent-[#b9976b]",
            })
          )
        )
      ),

      // --- Ringkasan Harga ---
      React.createElement(
        "div",
        { className: "mt-8 bg-white/70 rounded-2xl shadow p-4" },
        React.createElement(
          "div",
          { className: "flex justify-between mb-2 text-sm" },
          React.createElement("span", null, "Subtotal"),
          React.createElement("span", null, "Rp. 5.750.000")
        ),
        React.createElement(
          "div",
          { className: "flex justify-between mb-2 text-sm" },
          React.createElement("span", null, "Ongkir"),
          React.createElement("span", null, "Rp. 25.000")
        ),
        React.createElement("hr", { className: "my-2 border-[#d9c4a3]" }),
        React.createElement(
          "div",
          { className: "flex justify-between font-semibold text-[#5a4633]" },
          React.createElement("span", null, "Total"),
          React.createElement("span", null, "Rp. 5.775.000")
        )
      )
    ),

    // --- Tombol Konfirmasi ---
    React.createElement(
      "div",
      {
        className:
          "px-6 py-4 bg-white/70 shadow-inner flex justify-center items-center",
      },
      React.createElement(
        "button",
        {
          onClick: () => navigate("/payment-success"),
          className:
            "bg-[#b9976b] text-white px-8 py-2 rounded-full hover:bg-[#a9865a] transition text-sm",
        },
        "Konfirmasi Pesanan"
      )
    )
  );
}

export default Payment;
