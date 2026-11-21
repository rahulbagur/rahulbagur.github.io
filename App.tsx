import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CasePage from "./components/CasePage";
import { profiles } from "./content";

const Scroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Scroll />
      <Header />
      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CasePage />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-line">
          <p>Rahul Bagur, Bengaluru</p>
          <p>
            <a href={`mailto:${profiles.email}`}>{profiles.email}</a>
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
