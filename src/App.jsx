import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Apply from "./Pages/Apply/Apply";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {

  
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <BrowserRouter>

      <ScrollToTop />

      {/* Navbar */}
      <Navbar
        onApplyClick={() => setApplyOpen(true)}
      />

      {/* Apply Popup */}
      <Apply
        isOpen={applyOpen}
        onClose={() => setApplyOpen(false)}
      />

      <main
        style={{
          paddingTop: "85px",
          width: "100%",
          minHeight: "100vh",
        }}
      >

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/service" element={<Service />} />

          <Route path="/project" element={<Project />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
};

export default App;