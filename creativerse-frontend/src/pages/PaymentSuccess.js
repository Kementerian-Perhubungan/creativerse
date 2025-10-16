import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f7ede2] to-[#ead9c1] font-serif text-[#5a4633]",
    },

    // --- Ikon atau ilustrasi sukses ---
    React.createElement(
      "div",
      { className: "flex flex-col items-center text-center px-6" },
      React.createElement("img", {
        src: "/assets/success.png",
        alt: "success",
        className: "w-36 h-36 mb-4 object-contain",
      }),
      React.createElement(
        "h2",
        { className: "text-2xl font-semibold mb-2" },
        "Pembayaran Berhasil!"
      ),
      React.createElement(
        "p",
        { className: "text-sm text-gray-700 mb-6 max-w-sm" },
        "Terima kasih telah melakukan pembelian di CreatiVerse. Pesanan Anda sedang diproses dan akan segera dikirim."
      ),

      // --- Card Ringkasan Pesanan ---
      React.createElement(
        "div",
        { className: "bg-white/70 rounded-2xl shadow-md p-4 mb-8 w-72" },
        React.createElement(
          "div",
          { className: "flex justify-between text-sm mb-1" },
          React.createElement("span", null, "Nomor Pesanan"),
          React.createElement("span", { className: "font-medium" }, "#CVX82731")
        ),
        React.createElement(
          "div",
          { className: "flex justify-between text-sm mb-1" },
          React.createElement("span", null, "Tanggal"),
          React.createElement("span", { className: "font-medium" }, "15 Okt 2025")
        ),
        React.createElement("hr", { className: "my-2 border-[#d9c4a3]" }),
        React.createElement(
          "div",
          { className: "flex justify-between font-semibold text-[#5a4633]" },
          React.createElement("span", null, "Total Pembayaran"),
          React.createElement("span", null, "Rp. 5.775.000")
        )
      ),

      // --- Tombol kembali ke home ---
      React.createElement(
        "button",
        {
          onClick: () => navigate("/home"),
          className:
            "bg-[#b9976b] text-white px-8 py-2 rounded-full hover:bg-[#a9865a] transition",
        },
        "Kembali ke Home"
      )
    )
  );
}

export default PaymentSuccess;
