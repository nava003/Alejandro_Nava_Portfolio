import About from './components/About';
import BrailleMatrix from './components/BrailleMatrix';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div id='parentApp'>
      <BrailleMatrix/>
      <div id='portfolio-app'>
        <Header/>
        <Projects/>
        <About/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;