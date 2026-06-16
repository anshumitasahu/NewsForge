import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './navBar';
import Home from "./navigation/Home";
// import About from "./navigation/About";
// import News from "./navigation/News";
// import Contact from "./navigation/Contact";

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
