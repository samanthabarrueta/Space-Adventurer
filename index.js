canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
       
let villainsArray = [];

class Player {
    constructor(x) {
        this.x = canvas.width/2;
        this.y = canvas.height;
        this.size = 25;
        this.weight = 2;
        this.direction = 1;
        this.speed = 20;
    };
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    update() {
        this.draw();
        this.move(); 
    };
    move() {
        document.addEventListener('keydown', doKeyDown, true);
    };
};

const doKeyDown = (key) => {
    if(key.keyCode == 37) { 
        console.log('left')
    };
    if(key.keyCode == 39) {
        console.log('right')
    };
};

class Villain {
    constructor(x) {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = 15;
        this.weight = 2;
        this.direction = 1;
        this.velocity = {
            x: 1,
            y: 1
        };
    };
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
    update() {
        this.draw();
        this.y = this.y + this.velocity.y;
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
    const player1 = new Player();
    player1.update();
};

animate();
spawnVillains();