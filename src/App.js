import Header from "./components/header";
import Home from "./pages/home.js";
import Footer from "./components/footer.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/contact.js";

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
        </Routes>
        </Router>
    </div>
  );
}

export default App;
