import "./App.css";
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
    </div>
  );
}

export default App;
