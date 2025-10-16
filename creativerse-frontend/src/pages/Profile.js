import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // State tab aktif: "feed", "rate", atau "like"
  const [tab, setTab] = React.useState("feed");

  // Dummy data konten
  const artworks = [
    {
      id: 1,
      title: "Classic Charm",
      image: "/assets/art2.jpg",
      price: "Rp. 450.000",
      rating: 4,
    },
    {
      id: 2,
      title: "Golden Horizon",
      image: "/assets/art3.jpg",
      price: "Rp. 600.000",
      rating: 5,
    },
  ];

  // Fungsi render rating bintang
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        React.createElement(
          "span",
          {
            key: i,
            className: i <= count ? "text-yellow-500" : "text-gray-300",
          },
          "★"
        )
      );
    }
    return stars;
  };

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen bg-gradient-to-b from-[#f7ede2] to-[#ead9c1] font-serif text-[#5a4633]",
    },

    // --- Header ---
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
      React.createElement("h2", { className: "text-lg font-semibold" }, "Profile"),
      React.createElement(
        "button",
        {
          className: "text-xl hover:text-[#b9976b]",
        },
        "⚙️"
      )
    ),

    // --- Profil Header ---
    React.createElement(
      "div",
      { className: "flex flex-col items-center mt-2" },
      React.createElement("img", {
        src: "/assets/profile.jpg",
        alt: "profile",
        className: "w-24 h-24 rounded-full object-cover shadow-md mb-3",
      }),
      React.createElement(
        "h3",
        { className: "text-lg font-semibold" },
        "Erika Richardo"
      ),
      React.createElement(
        "p",
        { className: "text-sm text-gray-600" },
        "10.4K Followers • 1.0K Following"
      )
    ),

    // --- Tab Navigasi ---
    React.createElement(
      "div",
      { className: "flex justify-center mt-6 space-x-6" },
      ["feed", "rate", "like"].map((t) =>
        React.createElement(
          "button",
          {
            key: t,
            onClick: () => setTab(t),
            className:
              "pb-1 border-b-2 transition " +
              (tab === t
                ? "border-[#b9976b] text-[#b9976b]"
                : "border-transparent text-gray-500"),
          },
          t.charAt(0).toUpperCase() + t.slice(1)
        )
      )
    ),

    // --- Konten Berdasarkan Tab ---
    React.createElement(
      "div",
      { className: "mt-6 px-6 pb-10" },
      tab === "feed"
        ? // FEED: menampilkan karya terbaru
          artworks.map((art) =>
            React.createElement(
              "div",
              {
                key: art.id,
                className:
                  "mb-4 bg-white/70 rounded-2xl shadow overflow-hidden hover:shadow-md transition",
              },
              React.createElement("img", {
                src: art.image,
                alt: art.title,
                className: "w-full h-48 object-cover",
              }),
              React.createElement(
                "div",
                { className: "p-3" },
                React.createElement(
                  "h3",
                  { className: "font-medium text-sm mb-1" },
                  art.title
                ),
                React.createElement(
                  "p",
                  { className: "text-xs text-gray-600" },
                  art.price
                )
              )
            )
          )
        : tab === "rate"
        ? // RATE: karya yang sudah diberi rating
          artworks.map((art) =>
            React.createElement(
              "div",
              {
                key: art.id,
                className:
                  "mb-4 bg-white/70 rounded-2xl shadow overflow-hidden hover:shadow-md transition",
              },
              React.createElement("img", {
                src: art.image,
                alt: art.title,
                className: "w-full h-48 object-cover",
              }),
              React.createElement(
                "div",
                { className: "p-3 flex justify-between items-center" },
                React.createElement(
                  "h3",
                  { className: "font-medium text-sm" },
                  art.title
                ),
                React.createElement(
                  "div",
                  { className: "text-sm" },
                  renderStars(art.rating)
                )
              )
            )
          )
        : // LIKE: daftar karya yang disukai
          React.createElement(
            "div",
            { className: "grid grid-cols-2 gap-4" },
            artworks.map((art) =>
              React.createElement(
                "div",
                {
                  key: art.id,
                  className:
                    "bg-white/70 rounded-2xl shadow overflow-hidden hover:shadow-md transition relative",
                },
                React.createElement("img", {
                  src: art.image,
                  alt: art.title,
                  className: "w-full h-40 object-cover",
                }),
                React.createElement(
                  "div",
                  {
                    className:
                      "absolute top-2 right-2 bg-white/80 rounded-full px-2 py-1 text-red-500 text-sm",
                  },
                  "❤"
                ),
                React.createElement(
                  "div",
                  { className: "p-2 text-center text-xs font-medium" },
                  art.title
                )
              )
            )
          )
    )
  );
}

export default Profile;
