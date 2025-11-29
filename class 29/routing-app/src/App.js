
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";

import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import Categories from "./pages/categories/Categories";
import KidsWear from "./pages/categories/KidsWear";
import Accessories from "./pages/categories/Accessories";
import Menswear from "./pages/categories/Menswear";


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* nested routes */}
            <Route path="/categories" element={<Categories />}>
              <Route path="kidswear" element={<KidsWear />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="menswear" element={<Menswear />} />
            </Route>

            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  )
}

export default App

