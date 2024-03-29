function Nav() {
  const homeBtn = document.getElementById('homeBtn');
  

  return (
    <nav>
      <a href="#about"><img title="About" src="/person.svg" alt="SVG icon image of a person."/></a>
      <a href="#projects"><img title="Projects" src="/document.svg" alt="SVG icon image of a document."/></a>
      <a href="#contact"><img title="Contact" src="/phone.svg" alt="SVG icon image of a phone."/></a>
      <a href="#home" id="homeBtn"><img title="Return to Top" src="/rocket.svg" alt="SVG icon image of a rocket."/></a>
    </nav>
  )
}

export default Nav;