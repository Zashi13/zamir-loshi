import Header from "./components/header";
import Home from "./pages/home.js";
import Footer from "./components/footer.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/contact.js";
import About from "./pages/about.js";

//Routing
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
