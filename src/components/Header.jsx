import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const canvas = document.getElementById('brailleMatrix');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
    
    const draw = () => {
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

    setInterval(draw, 30);
  }, []);

  return (
    <header id="home">
      <canvas id="brailleMatrix"></canvas>
      {/* <div className="header-container" ></div> */}
      <h1>ALEJANDRO D<br/>NAVA</h1>
      <img src="" alt="Photo of me, Alejandro"/>
    </header>
  )
}

export default Header;