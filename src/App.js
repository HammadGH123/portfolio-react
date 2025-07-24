import './App.css';
import Topbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {

  document.body.style.backgroundColor = "#fff6d0"
  return (
      <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route exact path = '/portfolio-react/' element = {<Home/>} ></Route>
        <Route exact path = '/projects' element = {<Projects/>} ></Route>
        <Route exact path = '/contact' element = {<Contact/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
