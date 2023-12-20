import { ErrorBoundary } from "react-error-boundary";

// Import of components
import About from "./components/About/";
import Contact from "./components/Contact/";
import Home from "./components/Home/";
import Projects from "./components/Projects/";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <ErrorBoundary>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ErrorBoundary>
    </main>
  );
}

export default App;
