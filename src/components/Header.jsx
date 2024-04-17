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
        <div className={`imageCard ${flip ? "showImg" : "showSvg"}`}>
          <img src="/portfolio-face.jpg" alt="Photo of me, Alejandro"/>
          <div onClick={() => openInNewTab('https://docs.google.com/document/d/1AY3qnQXK78fvNE0Zxf7L5-eNvafmp7HF/edit?usp=sharing&ouid=117446421694413359869&rtpof=true&sd=true')}><Resumesvg/></div>
        </div>
      </div>
      <h1>FULLSTACK DEVELOPER</h1>
    </header>
  )
}

export default Header;