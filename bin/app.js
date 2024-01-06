

import { Background } from "./background.js";
import { Player, Bot } from "./pad.js";
import { Ball } from "./ball.js";
import { InputHandler } from "./input.js";

export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.background = new Background(this);
        
        // Создаем игроков
        this.paddle1 = new Player(this, 1);
        this.paddle2 = new Bot(this, 940, null); // Пока передаем null вместо this.ball

        // Создаем мяч и передаем ссылки на игроков
        this.ball = new Ball(this, this.paddle1, this.paddle2);

        // Теперь, когда this.ball определена, передаем ее в this.paddle2
        this.paddle2.ball = this.ball;
  
        this.input = new InputHandler();
    }

    draw(context) {
        this.background.draw(context);
        this.paddle1.draw(context);
        this.paddle2.draw(context);
        this.ball.draw(context);
    }

    update() {
        this.paddle1.update(this.input.keys);
        this.paddle2.update();
        this.ball.update(this.input.keys);
    }
}
