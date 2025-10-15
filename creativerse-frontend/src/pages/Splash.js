import React from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => navigate("/login"), 2000);
  }, [navigate]);

  return React.createElement(
    "div",
    { className: "splash-screen" },
    React.createElement("h1", { className: "title" }, "CreatiVerse")
  );
}

export default Splash;
