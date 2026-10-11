import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MoreFeatures from "./components/MoreFeatures";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <section>
        <Hero />
        <Features />
      </section>

      <section>
        <MoreFeatures />
        <CallToAction />
      </section>

      <Footer />
    </>
  );
}

export default App;