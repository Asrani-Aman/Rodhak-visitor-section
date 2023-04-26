import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Join from "./components/Join/Join";
import Program from "./components/Programs/Program";
import Reason from "./components/Reasons/Reason";
import Testimonial from "./components/Testimonials/Testimonial";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hero />
        <Program />
        <Reason />
        <Testimonial />
        <Join />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
