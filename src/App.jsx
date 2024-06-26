import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import mixpanel from "mixpanel-browser";

mixpanel.init("7f635825526aca70fe750d1f0cc3366d", {
  track_pages: true,
});

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};

export default App;
