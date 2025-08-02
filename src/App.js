import './App.css';
import Topbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {

  document.body.style.backgroundColor = "black"
  return (
      <main>
        <Topbar/>
        <section>
          <Home/>
        </section>
        <section>
          <Projects/>
        </section>
        <section>
          <Contact/>
        </section>
      </main>
  );
}

export default App;
