import './App.css';
import { Navigate } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Luxbar from './Luxbar/Luxbar';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
    <Router>
      <Luxbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Yanlış yola daxil olunarsa, Home səhifəsinə yönləndir */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>

    </div>
  );
}

export default App;