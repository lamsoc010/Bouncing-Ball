let stop;

// let time = document.getElementById('time');

// Khởi tạo bóng
let ball;

// Khởi tạo thanh ngang
let rect;

// Khởi tạo đếm thời gian
let time;
let interTime;
time = new Time();
let listTimeArr = [];

// Khởi tạo gạch
let brick;
let arrBrick = [];
const wBrick = 50;
const hBrick = 20;
function setUpBrick() {
    for(let i = 1; i < 8; i++) {
        arrBrick.push([(wBrick+20)*i, 10, true]);
    }
}

// Di chuyển bóng
function play() {
    ball.draw();
    ball.collision(rect,brick);
    brick.drawBricks();
    rect.draw();

    if(checkWin()) {
        alert('Chúc mừng bạn đã chiến thắng')
        clearInterval(interTime);
        time.addListTime(listTimeArr);
        clearInterval(stop);
        window.removeEventListener('keydown', moveRect);
    }
    checkGameOver();
}

// Di chuyểN thanh ngang
function moveRect(e) {
    if(e.keyCode == 37) {
        rect.moveLeft();
    } else if(e.keyCode == 39) {
        rect.moveRight();
    }
}

function checkWin() {
    return brick.arrBrick.every(function (brick) {
        return !brick[2];
    })
}

function checkGameOver() {
    if(ball.collisionCanvasDown()) {
        clearInterval(stop);
        clearInterval(interTime);
        alert('Bạn đã thua');
    }
}

function countTime() {
    time.countTime();
}


// 3 hàm chính chương trình
    
function start() {
    window.addEventListener('keydown', moveRect);
    document.getElementById('result').innerHTML = `Điểm: 0`;
    
    setUpBrick();
    
    seconds = 0;
    minutes = 0;
    ball = new Ball(100, 100, 20, 'red');
    rect = new Rectangle(80, 370, 100, 20, 'red');
    brick = new Brick(arrBrick, wBrick, hBrick, 'blue');

    clearInterval(interTime);
    interTime = setInterval(countTime, 1000);

    clearInterval(stop);
    stop = setInterval(play, 50);
}

function pause() {
    window.removeEventListener('keydown', moveRect);

    clearInterval(stop);
    clearInterval(interTime);
}

function next() {
    window.addEventListener('keydown', moveRect);

    clearInterval(stop);
    stop = setInterval(play, 50);

    clearInterval(interTime);
    interTime = setInterval(countTime, 1000);
}


