import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

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
      React.createElement("img", { 
        src: "/assets/banner.jpg", 
        alt: "banner",
        style: { 
          width: "100%", 
          height: "160px", 
          objectFit: "cover",
          borderRadius: "15px"
        } 
      }),
      React.createElement(
        "div",
        { className: "banner-text" },
        React.createElement("p", { 
          className: "banner-title",
          style: { 
            fontSize: "1.1rem", 
            fontWeight: "bold", 
            margin: "0 0 5px 0",
            color: "white",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
          } 
        }, "Check Out New Collection"),
        React.createElement("p", { 
          className: "banner-sub",
          style: { 
            fontSize: "0.8rem", 
            margin: "0 0 10px 0",
            color: "white",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
          } 
        }, "50% Discount transaction"),
        React.createElement("button", { 
          className: "banner-btn",
          style: { 
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "#6e5b3e",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: "bold",
            cursor: "pointer"
          } 
        }, "Shop Now")
      )
    ),

    // Categories
    React.createElement(
      "div",
      { className: "categories" },
      React.createElement("h2", { 
        style: { 
          fontSize: "1.1rem", 
          fontWeight: "bold", 
          margin: "0 0 15px 0",
          color: "#2c2c2c"
        } 
      }, "Categories"),
      React.createElement(
        "div",
        { className: "category-list" },
        categories.map((c) =>
          React.createElement(
            "div",
            { 
              key: c.name, 
              className: "category-item",
              style: { 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                margin: "0 5px"
              } 
            },
            React.createElement("div", { 
              className: "category-icon",
              style: { 
                backgroundColor: "#f6f1eb",
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "8px"
              } 
            }, c.icon),
            React.createElement("span", { 
              style: { 
                fontSize: "0.8rem", 
                color: "#6e5b3e",
                fontWeight: "500"
              } 
            }, c.name)
          )
        )
      ),
      React.createElement(
        "div",
        { 
          className: "category-buttons",
          style: { 
            display: "flex", 
            justifyContent: "space-between", 
            marginTop: "15px" 
          } 
        },
        ["All", "Deals", "New", "Best Sellers"].map((b, i) =>
          React.createElement(
            "button",
            { 
              key: b, 
              className: i === 2 ? "cat-btn active" : "cat-btn",
              style: { 
                flex: 1,
                backgroundColor: i === 2 ? "#6e5b3e" : "transparent",
                color: i === 2 ? "white" : "#6e5b3e",
                border: "1px solid #e0d2c3",
                borderRadius: "20px",
                padding: "8px 5px",
                fontSize: "0.8rem",
                margin: "0 3px",
                cursor: "pointer",
                fontWeight: i === 2 ? "bold" : "normal"
              } 
            },
            b
          )
        )
      )
    ),

    // New Section
    React.createElement(
      "div",
      { 
        className: "new-section",
        style: { marginTop: "20px" } 
      },
      React.createElement("h2", { 
        style: { 
          fontSize: "1.1rem", 
          fontWeight: "bold", 
          margin: "0 0 15px 0",
          color: "#2c2c2c"
        } 
      }, "New"),
      React.createElement(
        "div",
        { 
          className: "item-grid",
          style: { 
            display: "grid", 
            gridTemplateColumns: "repeat(2, 1fr)", 
            gap: "12px" 
          } 
        },
        items.map((item) =>
          React.createElement(
            "div",
            { 
              key: item.id, 
              className: "item-card",
              style: { 
                backgroundColor: "#f6f1eb",
                borderRadius: "15px",
                padding: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              } 
            },
            React.createElement("div", { 
              style: { 
                width: "100%", 
                height: "120px", 
                backgroundColor: "#e0d2c3",
                borderRadius: "10px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6e5b3e",
                fontSize: "0.8rem"
              } 
            }, "Image"),
            React.createElement(
              "div",
              { 
                className: "item-info",
                style: { padding: "0 5px" } 
              },
              React.createElement("h3", { 
                style: { 
                  fontSize: "0.9rem", 
                  fontWeight: "bold", 
                  margin: "0 0 5px 0",
                  color: "#2c2c2c"
                } 
              }, item.title),
              React.createElement("p", { 
                className: "item-author",
                style: { 
                  fontSize: "0.75rem", 
                  color: "#7b6b56",
                  margin: "0 0 8px 0"
                } 
              }, "by ", item.author),
              React.createElement(
                "div",
                { 
                  className: "item-bottom",
                  style: { 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center" 
                  } 
                },
                React.createElement("span", { 
                  className: "item-rating",
                  style: { 
                    fontSize: "0.8rem", 
                    color: "#e0a800",
                    fontWeight: "bold"
                  } 
                }, "⭐ ", item.rating),
                React.createElement("span", { 
                  className: "item-price",
                  style: { 
                    fontSize: "0.8rem", 
                    fontWeight: "bold", 
                    color: "#4e3b2f" 
                  } 
                }, item.price)
              )
            )
          )
        )
      )
    ),

    // Bottom Navigation
    React.createElement(
      "div",
      { 
        className: "bottom-nav",
        style: { 
          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px"
        } 
      },
      React.createElement("button", { 
        onClick: () => navigate("/"),
        style: { 
          background: "none", 
          border: "none", 
          fontSize: "1.5rem", 
          cursor: "pointer" 
        } 
      }, "🏠"),
      React.createElement("button", { 
        onClick: () => navigate("/cart"),
        style: { 
          background: "none", 
          border: "none", 
          fontSize: "1.5rem", 
          cursor: "pointer" 
        } 
      }, "🛒"),
      React.createElement("button", { 
        onClick: () => navigate("/profile"),
        style: { 
          background: "none", 
          border: "none", 
          fontSize: "1.5rem", 
          cursor: "pointer" 
        } 
      }, "👤")
    )
  );
}

export default Home;