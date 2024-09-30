import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './home/Home';
import Header from './header/Header';
import About from './about/About';
import Services from './services/Services';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <>
      <Router>
         {/* Navigation Links */}
         {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}
        <ScrollToTop/>
        <Header/>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>

      
    </>
  );
}

export default App;
