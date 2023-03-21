import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Join from "./components/Join/Join";
import Program from "./components/Programs/Program";
import Reason from "./components/Reasons/Reason";
import Testimonial from "./components/Testimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
