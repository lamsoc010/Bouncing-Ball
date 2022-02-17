
class Brick {
    constructor(arrBrick, width, height, color) {
        this.arrBrick = arrBrick;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
    drawBricks() {
        for(let i = 0; i < this.arrBrick.length  ; i++) {
            if(this.arrBrick[i][2]) {
                this.draw(this.arrBrick[i][0], this.arrBrick[i][1], this.width, this.height);
            }
        }
    }
}