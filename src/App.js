import Header from "./components/header";
import Home from "./pages/home.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/contact.js";
import About from "./pages/about.js";
import Impressum from "./pages/impressum.js";

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
        <Route path="/impressum" element={<Impressum/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
