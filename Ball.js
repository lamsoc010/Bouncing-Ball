class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 5;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.flag = 'down';
        this.random = 5;
        this.score = 0;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    moveTop() {
        this.y -= this.speed;
        this.x += this.random;
    }
    moveDown() {
        this.y += this.random;
    }
    moveRight() {
        this.x += this.random;
        this.y -= this.speed;
    }
    moveLeft() {
        this.x -= this.random;
        this.y -= this.speed;
    }

    collisionCanvas() {
        // Chạm trên
        if (this.y - this.radius <= 0) {
            this.random = Math.floor(Math.random() * 10 + 5);
            this.flag = 'down';
        }
        // Chạm phải
        if (this.x + this.radius >= this.canvas.width) {
            this.random = Math.floor(Math.random() * 15 + 5);
            this.flag = 'left';
        }
        // Chạm trái;
        if (this.x - this.radius <= 0) {
            this.random = Math.floor(Math.random() * 15 + 5);
            this.flag = 'right';
        }
    }

    collisionRect(Rect) {
        // Chạm dưới chạm Rect
        if (this.y + this.radius >= Rect.y && this.x + this.radius >= Rect.x && this.x - this.radius <= Rect.x + Rect.width) {
            this.random = Math.floor(Math.random() * 30 - 15);
            this.flag = 'up';
        }
    }

    collisionBrick(Brick) {
        // Chạm gạch:
        for(let i in Brick.arrBrick) {
            if(this.x + this.radius >= Brick.arrBrick[i][0] && this.x - this.radius <= Brick.arrBrick[i][0] + Brick.width) {
                if(this.y - this.radius <= Brick.arrBrick[i][1] + Brick.height) {
                    if(Brick.arrBrick[i][2]) {
                        this.random = Math.floor(Math.random() * 10 + 5);
                        this.flag = 'down';
                        this.score += 10;
                        document.getElementById('result').innerHTML = `Điểm: ${this.score}`;
                        Brick.arrBrick[i][2] = false;
                    } 
                }
            }
        }
    }

    collisionCanvasDown() {
        // Chạm dưới thì game over
        if(this.y + this.radius >= this.canvas.height) {
            return true;
        }
    }

    collision(Rect, Brick) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.collisionCanvas();
        this.collisionRect(Rect);
        this.collisionBrick(Brick);

        switch (this.flag) {
            case 'up':
                this.moveTop();
                break;
            case 'down':
                this.moveDown();
                break;
            case 'left':
                this.moveLeft();
                break;
            case 'right':
                this.moveRight();
                break;
        }
        this.draw();
    }


}