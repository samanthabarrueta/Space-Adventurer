const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let villainsArray = [];
let projectileArray = [];

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
        this.draw();
    };
    moveLeft() {
        this.x -= this.dx;
        this.draw();
    };
};

class Projectile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dy = 5;
        this.radius = 50;
        this.icon = document.getElementById('missile');
    };
    draw() {
        ctx.drawImage(this.icon, this.x, this.y, 50, 50);
    };
    shoot() {
        this.y -= this.dy;
        this.draw();
    };
};

const doKeyDown = (key) => {
    if(key.keyCode == 37) { 
        player.moveLeft();
    };
    if(key.keyCode == 39) {
        player.moveRight();
    };
    if(key.keyCode == 32) {
        projectileArray.push(new Projectile(player.x, player.y-75));
        projectile.shoot();
    };
};

let player = new Player(canvas.width/2, canvas.height-50);
player.draw();
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
    projectileArray.forEach((projectile) => {
        projectile.shoot();
    });
};

animate();
spawnVillains();