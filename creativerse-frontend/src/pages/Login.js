import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  return React.createElement(
    "div",
    { className: "auth-container" },
    React.createElement(
      "div",
      { className: "auth-card" },
      React.createElement("h1", { className: "auth-title" }, "CreatiVerse"),
      React.createElement(
        "div",
        { className: "auth-box" },
        React.createElement("h2", { className: "auth-header" }, "Wellcome!"),
        React.createElement(
          "p",
          { className: "auth-sub" },
          "Login to your Account"
        ),
        React.createElement("input", {
          type: "text",
          placeholder: "Username",
          className: "auth-input",
        }),
        React.createElement("input", {
          type: "email",
          placeholder: "Email",
          className: "auth-input",
        }),
        React.createElement("input", {
          type: "password",
          placeholder: "Password",
          className: "auth-input",
        }),
        React.createElement(
          "button",
          {
            className: "auth-button",
            onClick: () => navigate("/home"),
          },
          "Log in"
        ),
        React.createElement(
          "p",
          { className: "auth-footer" },
          "Don’t have an account? ",
          React.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault();
                navigate("/signup");
              },
              className: "auth-link",
            },
            "Sign up"
          )
        )
      )
    )
  );
}

export default Login;
