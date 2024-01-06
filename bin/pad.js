class Pad {
    constructor(game, dx){
        this.game = game;
        this.height = 120;
        this.dx = dx;
        this.dy = this.game.height/2;
        this.width = this.game.width/40;
        this.image = document.querySelector('#player');
        

    }

    draw(context){
        context.drawImage(
      this.image,
      this.dx,
      this.dy,
      this.width,
      this.height,
 
        )

    }




}

export class Player extends Pad {
    constructor(game, dx) {
        super(game, dx);
        this.speedY = 1; 
    }



    update(input){
        this.dy +=this.speedY;
        if(input.includes("ArrowUp") && this.checkBounds()) this.speedY = -5;
        else if (input.includes("ArrowDown") && this.checkBounds() ) this.speedY = +5;
        else this.speedY = 0;
    }



    checkBounds() {
        // Проверка, чтобы игрок не выходил за верхнюю границу холста
        if (this.dy < 0) {
            this.dy = 0; // Задаем минимальную координату, чтобы не выходить за верхнюю границу
        }
        
        // Проверка, чтобы игрок не выходил за нижнюю границу холста
        if (this.dy + this.height > this.game.height) {
            this.dy = this.game.height - this.height; // Задаем максимальную координату, чтобы не выходить за нижнюю границу
        }
        
        return true;
    }
    
}


export class Bot extends Player {
    constructor(game, dx, ball){
        super(game, dx);
        this.ball = ball;
    }

    update(){
        let randNum;

        // Используем setInterval для случайных ошибок каждые 5 секунд
        setInterval(() => {
            randNum = Math.floor(Math.random() * 3);
        }, 5000);

        // Выполняем анимацию
        this.startAnimation(randNum);
    }

    startAnimation(randNum) {
        // Используем requestAnimationFrame для плавной анимации
        const animate = () => {
            if(this.ball.dy > this.dy) {
                if(randNum === 2){
                    this.dy =  this.dy + this.speedY - randNum;
                } else {
                    this.dy += this.speedY;
                }
            } else if(this.ball.dy < this.dy) {
                if(randNum === 2){
                this.dy = this.dy - this.speedY - randNum;
                } else {
                    this.dy -= this.speedY;
                }
            }

            // Проверка границ для бота
            this.checkBounds();

            // Проверяем, не вышел ли шарик за границы
            if (this.ball.dx > 0 && this.ball.dx < this.game.width) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }
}
