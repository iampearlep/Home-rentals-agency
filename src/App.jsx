import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
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
