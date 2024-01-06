export class InputHandler {
    constructor() {
      this.keys = [];
      window.addEventListener("keydown", (ev) => {
        if (
          (ev.key === "ArrowDown" ||
            ev.key === "ArrowUp" || ev.key === "Enter") &&
          this.keys.indexOf(ev.key) === -1
        ) {
          this.keys.push(ev.key);
        }
        console.log(ev.key, this.keys);
      });
  
      window.addEventListener("keyup", (ev) => {
        if (
          ev.key === "ArrowDown" ||
          ev.key === "ArrowUp" ||  ev.key === "Enter"
        ) {
          this.keys.splice(this.keys.indexOf(ev.key), 1);
        }
        console.log(ev.key, this.keys);
      });
    }
  }
  