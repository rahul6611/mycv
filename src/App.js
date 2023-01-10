import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
