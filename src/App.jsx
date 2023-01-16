import React from "react";
import {
  Header,
  Hero,
  Services,
  Properties,
  Search,
  CTA,
  Testimonials,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <div className="top-section">
        <Header />
        <Hero />
      </div>
      <Services />
      <Properties />
      <Search />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
