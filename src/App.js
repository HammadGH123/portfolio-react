import './App.css';
import Topbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  document.body.style.backgroundColor = "#fff6d0";
  return (
    <HashRouter>
      <Topbar />
      <Routes>
        <Route path="/portfolio-react" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
