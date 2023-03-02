import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { About } from "../pages/About";
import { Location } from "../pages/Location";
import Header from "../components/Header";
import { OurChefs } from "../pages/OurChefs";
import { OurSpecials } from "../pages/OurSpecials";

import bgBanner from "../components/assets/Banner.svg";

export const Parent = () => {
  return (
    <div
      className="h-screen w-full pt-12"
      style={{ backgroundImage: `url(${bgBanner})` }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/OurSpecials" element={<OurSpecials />} />
          <Route path="/OurChefs" element={<OurChefs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
