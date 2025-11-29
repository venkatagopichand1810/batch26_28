import Navbar from "./components/Navbar";
import About from "./pages/About"
import BlogDetail from "./pages/BlogDetail"
import BlogList from "./pages/BlogList"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />

        </Routes>

      </div>



    </Router>
  )

}

export default App