import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
function App() {
  return (
    <div>
      {/* <Router> */}
      <div className="noise"></div>
      <div className="App">
        <ScrollToTop />
        <Home />
        <About />
        <Projects />
        <Contact />

        {/* <Routes> */}
        {/* <Route path="/" exact element={<Home />} /> */}
        {/* <Route path="/about" exact element={<About />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/contact" exact element={<Contact />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
