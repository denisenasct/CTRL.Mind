/* Reset e base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  font-family: 'Courier New', Courier, monospace;
  color: #00ff88;
  overflow-x: hidden;
  position: relative;
}

/* Efeito de Neblina */
body::before {
  content: "";
  position: fixed;
  top: -20%;
  left: -20%;
  width: 160%;
  height: 160%;
  background: url('img/fog.png') repeat;
  opacity: 0.03;
  z-index: 0;
  animation: flutuar 60s linear infinite;
  pointer-events: none;
}

/* Animação da neblina */
@keyframes flutuar {
  0% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
  100% { transform: translate(0, 0); }
}

/* Tela de introdução */
#tela-intro {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: 1;
}

.intro-texto h1 {
  font-size: 3rem;
  color: #00ff88;
  text-shadow: 0 0 20px #00ff88;
  margin-bottom: 1rem;
  animation: sombraPulsante 2s ease-in-out infinite;
}

.intro-texto p {
  font-size: 1.1rem;
  white-space: pre-line;
  color: #88ffcc;
  margin: 1rem auto;
  width: 80%;
}

.intro-matrix-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('img/matrix.gif');
  background-size: cover;
  opacity: 0.12;
  z-index: 0;
}

.intro-texto {
  position: relative;
  z-index: 2;
}

/* Botões */
button {
  background: transparent;
  color: #00ff88;
  border: 2px solid #00ff88;
  padding: 0.8rem 1.6rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: 0.3s ease;
  text-shadow: 0 0 5px #00ff88;
  animation: sombraPulsante 3s infinite;
}

button:hover {
  background-color: #00ff88;
  color: black;
  box-shadow: 0 0 20px #00ff88;
}

/* Animação de sombra pulsante */
@keyframes sombraPulsante {
  0% {
    text-shadow: 0 0 10px #00ff88;
  }
  50% {
    text-shadow: 0 0 20px #00ff88;
  }
  100% {
    text-shadow: 0 0 10px #00ff88;
  }
}

/* Jogo em andamento */
#jogo {
  padding: 2rem;
  text-align: center;
  z-index: 2;
  position: relative;
}

.hud {
  margin-top: 2rem;
}

.avatar {
  width: 160px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 0 30px #00ff88, 0 0 15px #00cc66 inset;
  transition: all 0.3s ease;
  animation: sombraPulsante 4s ease-in-out infinite;
}

/* Botões de escolhas */
.botoes-escolha {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2rem;
}

.botoes-escolha button {
  width: 80%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(0, 255, 136, 0.08);
  border: 2px solid #00ff88;
  font-size: 1rem;
  color: #00ff88;
  transition: background-color 0.3s, transform 0.2s;
}

.botoes-escolha button:hover {
  background-color: #00ff88;
  color: black;
  transform: scale(1.03);
}

/* Tela final */
#final {
  padding: 3rem;
  text-align: center;
  z-index: 2;
}

#final h2 {
  font-size: 2.5rem;
  color: #ff0066;
  margin-bottom: 1rem;
  text-shadow: 0 0 15px #ff0066;
}

#final p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 2rem;
}
