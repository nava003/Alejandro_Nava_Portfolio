import About from './components/About';
import BrailleMatrix from './components/BrailleMatrix';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <BrailleMatrix/>
      <div className='portfolio-app'>
        <Nav/>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;