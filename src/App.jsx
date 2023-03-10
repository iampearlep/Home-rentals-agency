import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Header,
  Services,
  Properties,
  Search,
  CTA,
  Testimonials,
  Footer,
} from "./components";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-x-hidden">
        <Header />
      <Services />
      <Properties />
      <Search />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
