import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public Pages
import PublicLayout from "./layouts/PublicLayout/PublicLayout.jsx";
import Home from "./pages/PublicPages/Home/Home.jsx";
import Overview from "./pages/PublicPages/Overview/Overview.jsx";
import About from "./pages/PublicPages/About/About.jsx";
import Contact from "./pages/PublicPages/Contact/Contact.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/*" element={<Home />}></Route>
            <Route path="overview" element={<Overview />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
