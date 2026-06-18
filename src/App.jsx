import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './navBar';
import Home from "./navigation/Home";
import About from "./navigation/About";
import News from "./navigation/News";
import Tech from "./navigation/Tech"
import Politics from "./navigation/politics"
import Sports from "./navigation/Sports"
import Contact from "./navigation/Contact";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/news" element={<News />} />
         <Route path="/tech" element={<Tech />} />
         <Route path="/politics" element={<Politics />} />
         <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
