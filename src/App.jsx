import React, { useState } from "react";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Works,
  Feedbacks,
  Contact,
  Tech,
  StarsCanvas,
} from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [isDarkMode, setisDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <div
        className={`relative z-0 ${isDarkMode ? "bg-primary" : "bg-secondary"}`}
      >
        <div className="bg-her-pattern bg-cover bg-no-repeat bg-center">
          <Navbar isDarkMode={isDarkMode} setisDarkMode={setisDarkMode} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
