import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className='portfolio-app'>
      <Nav/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;