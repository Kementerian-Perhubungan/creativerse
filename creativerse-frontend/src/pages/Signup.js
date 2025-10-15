import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return React.createElement(
    "div",
    { className: "signup-page" },
    React.createElement("h2", null, "CreatiVerse"),
    React.createElement(
      "div",
      { className: "signup-card" },
      React.createElement("h3", null, "Create your Account"),
      React.createElement("input", { type: "text", placeholder: "Username" }),
      React.createElement("input", { type: "email", placeholder: "Email" }),
      React.createElement("input", { type: "password", placeholder: "Password" }),
      React.createElement("input", { type: "password", placeholder: "Confirm Password" }),
      React.createElement(
        "button",
        { onClick: () => navigate("/home"), className: "btn-signup" },
        "Sign Up"
      )
    )
  );
}

export default Signup;
