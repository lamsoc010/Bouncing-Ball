let interStop;
let description = 'next';

// let time = document.getElementById('time');

// Khởi tạo bóng
let ball;

// Khởi tạo thanh ngang
let rect;

// Khởi tạo đếm thời gian
let time;
let turn = 1;
let interTime;
let listTimeArr = [];

// Khởi tạo gạch
let brick;
let arrBrick = [];
let interFalling;
const wBrick = 50;
const hBrick = 20;
function setUpBrick() {
    for(let i = 1; i < 8; i++) {
        arrBrick.push([(wBrick+20)*i, 10, true]);
    }
}

function fallingBricks() {
    for(let i = 0; i < arrBrick.length; i++) {
        arrBrick[i][1] += 30;
    }
    for(let i = 1; i < 8; i++) {
        arrBrick.push([(wBrick+20)*i, 10, true]);
    }
    ball.speed += 5;
    rect.speed += 5;
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
        time.addListTime(listTimeArr, turn, ball.score);
        turn += 1;
        clearInterval(interStop);
        clearInterval(interFalling);
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
        clearInterval(interStop);
        clearInterval(interTime);
        clearInterval(interFalling);
        alert('Bạn đã thua');
    }
}

function countTime() {
    time.countTime();
    seconds += 1;
    console.log(seconds)
    
    if(seconds != 00 && seconds % 35 == 0) {
        fallingBricks();
    }
}

// Tạo các phím tắt
function shortcutsPauseNext(e) {
    if(e.keyCode == 32) {
        if(description == 'next') {
            pause();
        } else if(description == 'pause') {
            next();
        }
    }
}
function shortcutsStart(e) {
    if(e.keyCode == 13) {
        start();
    }
}
window.addEventListener('keydown', shortcutsStart);



// 3 hàm chính chương trình

function start() {
    window.addEventListener('keydown', moveRect);
    window.addEventListener('keydown', shortcutsPauseNext);
    document.getElementById('result').innerHTML = `Điểm: 0`;
    
    arrBrick = [];
    setUpBrick();
    
    seconds = 0;

    ball = new Ball(100, 100, 20, 'red');
    rect = new Rectangle(80, 600 - 40, 100, 20, 'red');
    brick = new Brick(arrBrick, wBrick, hBrick, 'blue');
    time = new Time();
    

    clearInterval(interTime);
    interTime = setInterval(countTime, 1000);

    // clearInterval(interFalling);
    // interFalling = setInterval(fallingBricks, 35000);
    
    clearInterval(interStop);
    interStop = setInterval(play, 50);
    
}


function pause() {
    window.removeEventListener('keydown', moveRect);
    description = 'pause';
    clearInterval(interStop);
    // clearInterval(interFalling);
    clearInterval(interTime);
}

function next() {
    window.addEventListener('keydown', moveRect);
    description = 'next';

    clearInterval(interStop);
    interStop = setInterval(play, 50);
    // clearInterval(interFalling);
    // interFalling = setInterval(fallingBricks, 35000);
    clearInterval(interTime);
    interTime = setInterval(countTime, 1000);
}


