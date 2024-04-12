import { useState, useEffect, useRef } from "react";

function BrailleMatrix() {
  const canvasRef = useRef(null);
  const [canvasWidth, setWidth] = useState(window.innerWidth);
  const [canvasHeight, setHeight] = useState(window.innerHeight);

  // Once the component mounts, run this callback effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const fontSize = 16;
    const columns = canvasWidth/fontSize;

    const brailleUnicode = [];
    for (let i = 0; i < 100; i++) {
      brailleUnicode[i] = String.fromCharCode(0x2800 + Math.random() * (0x283F-0x2800+1))
    }

    const raindropEffect = [];
    for (let n = 0; n < columns; n++) {
      raindropEffect[n] = 1;
    }
    
    // Draw the Matrix raindrop effect
    const drawMatrix = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0';
      context.font = `${fontSize}px monospace`;

      for (let d = 0; d < raindropEffect.length; d++) {
        const text = brailleUnicode[Math.floor(Math.random() * brailleUnicode.length)];

        context.fillText(text, d*fontSize, raindropEffect[d]*fontSize);

        if (raindropEffect[d]*fontSize > canvas.height && Math.random() > 0.975) {
          raindropEffect[d] = 0;
        }
        raindropEffect[d]++;
      }
    }

    // Callback the draw function at a rate of 30 milliseconds
    const intervalID = setInterval(drawMatrix, 30);

    const handleResize = () => {
      clearInterval(intervalID);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [canvasWidth, canvasHeight]);

  return (
    <canvas id="brailleMatrix" ref={canvasRef}/>
  )
}

export default BrailleMatrix;