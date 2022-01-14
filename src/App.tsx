import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./app/pages/HomePage";
import { NavBar } from "./app/components/NavBar";
import { Footer } from "./app/components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
