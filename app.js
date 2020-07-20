class App {
  constructor(){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }
  resize(){}
  animate(){}
}

window.onload = () => {
  new App();
}