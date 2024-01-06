export class Ball {
    constructor(game, paddle1, paddle2){
        this.game = game;
        this.paddle1 = paddle1;
        this.paddle2 = paddle2;
        this.dx = this.game.width / 2;
        this.dy = this.game.height / 2;
        this.speedX = 0.1;
        this.speedY = 0.1;
        this.width = 10;
        this.height = 10;
        this.image = document.querySelector('#ball');
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.dx,
            this.dy,
            this.width,
            this.height
        );
    }

    update(input) {
        if (input.includes("Enter")) {
            if(!this.dx <= 0 && !this.dx>=this.game.width){
                this.startAnimation();
            } else {
                this.dx = this.game.width/2;
                this.startAnimation();
            }
        }
    }

    startAnimation() {
        // Используем requestAnimationFrame для плавной анимации
        const animate = () => {
            this.checkCollision();
            this.dx -= this.speedX;
            this.dy -= this.speedY;

            // Проверяем, не вышел ли шарик за границы
            if (this.dx > 0 && this.dx < this.game.width) {
                
                requestAnimationFrame(animate);
            } 
        };

        animate();
    }


    checkCollision() {
        // Отскок от верхней и нижней границы холста
        if (this.dy <= 0 || this.dy >= this.game.height - this.height) {
            this.speedY = -this.speedY;
        }

        // Отскок от ракеток
        if (
            this.dx <= this.paddle1.dx + this.paddle1.width &&
            this.dy >= this.paddle1.dy &&
            this.dy <= this.paddle1.dy + this.paddle1.height
        ) {
            this.speedX = -this.speedX;
        }

        if (
            this.dx >= this.paddle2.dx &&
            this.dy >= this.paddle2.dy &&
            this.dy <= this.paddle2.dy + this.paddle2.height
        ) {
            this.speedX = -this.speedX;
        }
    }
}
