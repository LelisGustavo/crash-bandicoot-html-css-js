// Váriavel que pega o crash vindo do CSS através do querySelector
const crash = document.querySelector(".crash");

// Váriavel que pega o nitro/obstáculo vindo do CSS através do querySelector
const nitro = document.querySelector(".nitro");

const tree = document.querySelector(".tree")

// Váriavel que reproduz o aúdio do jogo
const music = new Audio("./sounds/Crash-Bandicoot-3-Warped-Theme.mp3");
music.play();
music.loop = true; 

// Função jump para fazer o personagem pular 
  const jump = () => {
    // Adicionando a class jump no personagem
  crash.classList.add("jump");

  // Função que executa o que está dentro dela depois de um período de tempo
  setTimeout(() => {
    // Removendo a class jump do personagem
    crash.classList.remove("jump");
  }, 500);
};

// Váriavel que verifica se o personagem colidiu com o obstáculo
const loop = setInterval(() => {
    // Váriavel que verifica a posição do nitro/obstáculo
  const nitroPosition = nitro.offsetLeft;
    // Váriavel que verifica s posição do personagem Crash
  const crashPosition = +window.getComputedStyle(crash).bottom.replace("px", "");
  

    // Condição que verifica se o nitro/obstáculo colidiu com o personagem Crash, e assim perdendo o jogo
  if (nitroPosition <= 120 && nitroPosition > 0 && crashPosition < 80) {

    // Para a animação quando se perde o jogo
    nitro.style.animation = "none";
    // Para o nitro/obstáculo na posição que o persongem colidiu
    nitro.style.left = `${nitroPosition}px`;


    // Para a animação quando se perde o jogo 
    crash.style.animation = "none";
    // Para o personagem Crash na posição que colidiu
    crash.style.bottom = `${crashPosition}px`;


    // Altera a imagem do personagem após a colisão
    crash.src = "./images/crash-game-over-right.png";
    crash.style.width = "120px";

    // Limpa o loop do jogo depois de perder
    clearInterval(loop);

  }
}, 10);

// EventListener para pular quando qualquer tecla for clicada, chamando a função jump em CSS
document.addEventListener("keydown", jump);

// EventListener para recomeçar o jogo
document.addEventListener("keydown", event => {
    const { key } = event
    if (key.toLowerCase() === "s") {
      location.reload()
    }
  }) 
