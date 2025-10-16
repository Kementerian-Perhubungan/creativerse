import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Splash) }),
      React.createElement(Route, { path: "/login", element: React.createElement(Login) }),
      React.createElement(Route, { path: "/signup", element: React.createElement(SignUp) }),
      React.createElement(Route, { path: "/home", element: React.createElement(Home) }),
      React.createElement(Route, { path: "/detail", element: React.createElement(Detail) }),
      React.createElement(Route, { path: "/profile", element: React.createElement(Profile) }),
      React.createElement(Route, { path: "/cart", element: React.createElement(Cart) }),
      React.createElement(Route, { path: "/payment", element: React.createElement(Payment) }),
      React.createElement(Route, { path: "/payment-success", element: React.createElement(PaymentSuccess) })
    )
  );
}

export default App;
