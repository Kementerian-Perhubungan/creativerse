import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return React.createElement(
    "div",
    { className: "login-page" },
    React.createElement("h2", null, "CreatiVerse"),
    React.createElement(
      "div",
      { className: "login-card" },
      React.createElement("h3", null, "Welcome!"),
      React.createElement("p", null, "Login to your Account"),
      React.createElement("input", { type: "text", placeholder: "Username" }),
      React.createElement("input", { type: "email", placeholder: "Email" }),
      React.createElement("input", { type: "password", placeholder: "Password" }),
      React.createElement(
        "button",
        { onClick: () => navigate("/home"), className: "btn-login" },
        "Log In"
      ),
      React.createElement(
        "p",
        null,
        "Don't have an account? ",
        React.createElement(
          "a",
          {
            href: "#",
            onClick: (e) => {
              e.preventDefault(); 
              navigate("/signup");
            },
          },
          "Sign up"
        )
      )
    )
  );
}

export default Login;
