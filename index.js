const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let villainsArray = [];

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 10;
        this.radius = 25;
        this.icon = document.getElementById('user');
    };
    draw() {
        ctx.drawImage(this.icon, this.x, this.y, 50, 50);
    }; 
    moveRight() {
        this.x += this.dx;
    };
    moveLeft() {
        this.x -= this.dx;
    };
    update() {
        this.draw();
    };
};

const doKeyDown = (key) => {
    if(key.keyCode == 37) { 
        player.moveLeft();
        player.update();
    };
    if(key.keyCode == 39) {
        player.moveRight();
        player.update();
    };
};

let player = new Player(canvas.width/2, canvas.height-50);
player.update();
addEventListener('keydown', doKeyDown, true);

class Villain {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.dy = 1;
        this.radius = 15;
        this.icon = document.getElementById('enemy');
    };
    draw() {
        ctx.drawImage(this.icon, this.x, this.y, 50, 50);
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
        villain.update();
    });
};

animate();
spawnVillains();