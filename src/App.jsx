import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar/Navbar";
import Rate from "./components/Rate";
import WhyUs from "./components/WhyUs";
import Tutorial from "./components/Tutorial";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer/Footer";
import Accordion from "./components/test/accordion";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Rate />
      <WhyUs />
      <Tutorial />
      <CTA />
      <FAQ />
      <Accordion />
      <Footer />
    </>
  );
};

export default App;
