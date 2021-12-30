import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./app/pages/HomePage";
import { NavBar } from "./app/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
