import React from "react";
import logo from "./logo.svg";
import { Helmet } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";import { useTranslation } from 'react-i18next';

import "./App.css";
import { HomePage } from "./app/pages/HomePage";
import { Portfolio } from "./app/pages/Portfolio";
import { Contact } from "./app/pages/Contact";

function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
      <Helmet
        titleTemplate="%s - Diamond Finishes LLC"
        defaultTitle="Diamond Finishes LLC"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Quality Carpentry Services" />
      </Helmet>

      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<HomePage />} />
        <Route path={process.env.PUBLIC_URL + "/portfolio"} element={<Portfolio />} />
        <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />} />
      </Routes>
      {/* <GlobalStyle /> */}
    </Router>
  );
}

export default App;
