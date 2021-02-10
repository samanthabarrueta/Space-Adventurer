canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
       
let villainsArray = [];
let playerArray = [];

class Player {
    constructor(x, y) {
        this.x = canvas.width/2;
        this.y = y;
        this.dx = 10;
        this.size = 25;
        this.weight = 2;
    };
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }; 
    moveRight() {
        this.x += this.dx;
        console.log('moveRight' + this.x);
        playerArray.push(new Player(this.x, canvas.height));
    };
    moveLeft() {
        this.x -= this.dx;
        console.log('moveLeft' + this.x);
        playerArray.push(new Player(this.x, canvas.height));
    };
    update() {
        this.draw();
    }
};

const doKeyDown = (key) => {
    if(key.keyCode == 37) { 
        alert(key.keyCode);
        player.moveLeft();
        player.update();
    };
    if(key.keyCode == 39) {
        alert(key.keyCode);
        player.moveRight();
        player.update();
    };
};

let player = (new Player(canvas.width/2, canvas.height));
addEventListener('keydown', doKeyDown, true);

class Villain {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.dy = 1;
        this.size = 15;
        this.weight = 2;
    };
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    update() {
        this.y += this.dy;
        this.draw();
    };
};

const spawnVillains = () => {
    setInterval(() => {
        villainsArray.push(new Villain())
    }, 1500);
};

const animate = () => {
    requestAnimationFrame(animate);
    villainsArray.forEach((villain) => {
        villain.update()
    });
};

animate();
spawnVillains();