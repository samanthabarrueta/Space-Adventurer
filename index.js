canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
       
let villainsArray = [];

class Player {
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height;
        this.dx = 10;
        this.radius = 25;
        this.weight = 2;
    };
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
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

let player = (new Player());
player.update();
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