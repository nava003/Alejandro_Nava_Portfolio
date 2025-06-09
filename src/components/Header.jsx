import { useState } from "react";
import { Resumesvg } from "./svgComponents";

function Header() {
  const [flip, setFlip] = useState(true);

  const handleImageFlip = () => {
    setFlip(!flip)
  }

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <header id="home" className="main-containers">
      <h1>ALEJANDRO (ALEX) NAVA</h1>

      <div className="card-container" onClick={handleImageFlip}>
        <span>Click My Face</span>
        <div className={`imageCard ${flip ? "showImg" : "showSvg"}`}>
          <img src="/portfolio-face.jpg" alt="Photo of me, Alejandro"/>
          <div onClick={() => openInNewTab('https://docs.google.com/document/d/1G1k_3Efuu5IDSrD5RKJ1u0Z1nJ8jsQlr/export?format=pdf')}><Resumesvg/></div>
        </div>
        <span>For My Resume!</span>
      </div>
      
      <h1>FULLSTACK DEVELOPER</h1>
    </header>
  )
}

export default Header;