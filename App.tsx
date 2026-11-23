import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/blocks/Footer";
import { Nav } from "@/components/blocks/Nav";
import Home from "@/pages/Home";

const Experience = lazy(() => import("@/pages/Experience"));
const WorkIndex = lazy(() => import("@/pages/WorkIndex"));
const CasePage = lazy(() => import("@/pages/CasePage"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Scroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-card focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Nav />
      <main id="content">
        <Suspense fallback={<p className="px-6 py-16">Loading.</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<WorkIndex />} />
            <Route path="/work/:slug" element={<CasePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
