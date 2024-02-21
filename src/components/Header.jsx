import { useState, useEffect, useRef } from "react";

function Header() {
  const canvasRef = useRef(null);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Once the component mounts, run this callback effect
  useEffect(() => {
    const canvas = document.getElementById('brailleMatrix');
    const context = canvas.getContext('2d');
    
    // Draw the Matrix raindrop effect
    const drawMatrix = () => {
      canvas.width = size.width;
      canvas.height = size.height;

      const fontSize = 16;
      const columns = canvas.width/fontSize;
  
      const brailleUnicode = [];
      for (let i = 0; i < 100; i++) {
        brailleUnicode[i] = String.fromCharCode(0x2800 + Math.random() * (0x283F-0x2800+1))
      }
  
      const raindropEffect = [];
      for (let i = 0; i < columns; i++) {
        raindropEffect[i] = 1;
      }

      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0';
      context.font = `${fontSize}px monospace`;

      for (let n = 0; n < raindropEffect.length; n++) {
        const text = brailleUnicode[Math.floor(Math.random() * brailleUnicode.length)];

        context.fillText(text, n*fontSize, raindropEffect[n]*fontSize);

        if (raindropEffect[n]*fontSize > canvas.height && Math.random() > 0.975) {
          raindropEffect[n] = 0;
        }
        raindropEffect[n]++;
      }
    }

    // Callback the draw function at a rate of 30 milliseconds
    setInterval(drawMatrix, 30);

    const handleResize = () => {
      setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [size.width, size.height]);

  return (
    <header id="home">
      <canvas id="brailleMatrix" ref={canvasRef}/>
      <div className="header-container" >
        <h1>ALEJANDRO D<br/>NAVA</h1>
        <img src="" alt="Photo of me, Alejandro"/>
      </div>
      
    </header>
  )
}

export default Header;