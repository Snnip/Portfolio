import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// Import of components
import About from "./components/About/";
import Contact from "./components/Contact/";
import Home from "./components/Home/";
import Projects from "./components/Projects/";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
