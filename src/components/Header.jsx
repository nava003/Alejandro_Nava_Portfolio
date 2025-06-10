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
          <div className="svg-wrapper" onClick={(e) => {
            e.stopPropagation();
            openInNewTab('/AlexNavaResume.pdf');
            setFlip(true);
          }}><Resumesvg/></div>
        </div>
        <span>For My Resume!</span>
      </div>
      
      <div id="home-roles">
        <h1>FULLSTACK DEVELOPER</h1>
        <h1>CYBERSECURITY GRADUATE</h1>
      </div>
    </header>
  )
}

export default Header;