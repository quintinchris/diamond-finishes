import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";

function App() {
  const { i18n } = useTranslation();
  return (
    <Router>
      <Helmet
        titleTemplate="%s - Diamond Finishes"
        defaultTitle="Diamond Finishes"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Quality Carpentry Services" />
        <link
          rel="icon"
          href="icons/diamond.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
