class Layer {
    constructor(game, width, height, image) {
      this.game = game;
      this.width = width;
      this.height = height;
      this.image = image;
      this.x = 0;
      this.y = 0;
    }
  
    draw(context) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
  
  export class Background {
    constructor(game) {
      this.game = game;
      this.width = 960;
      this.height = 500;
      this.layer1image = document.getElementById("background"); 
      
      if (!this.layer1image) {
        console.error("Unable to find the background image element.");
        return;
      }
  
      this.layer1 = new Layer(
        this.game,
        this.width,
        this.height,
        this.layer1image
      );
    }
  
    draw(context) {
      this.layer1.draw(context);
    }
  }
  