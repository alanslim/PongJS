import { Game } from "./bin/app.js";


//Событие которое запускает нашу игру по загрузке окна window.

window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 960;
  canvas.height = 500;
  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);

  }
  animate();
});
