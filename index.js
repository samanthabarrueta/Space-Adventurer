const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playersArray = [];
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
        this.x += 10;
        this.draw();
    };
    moveLeft() {
        this.x -= 10;
        this.draw();
    };
    update() {
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

const start = () => {
    let player = new Player(canvas.width/2, canvas.height-50);
    player.draw();

    const doKeyDown = (key) => {
        if(key.keyCode == 37) {             
            player.moveLeft();
            playersArray.pop(playersArray.length-1);
            playersArray.push(new Player(player.x, player.y));
        };
        if(key.keyCode == 39) {
            player.moveRight();
            playersArray.pop(playersArray.length-1);
            playersArray.push(new Player(player.x, player.y));
        };
        if(key.keyCode == 32) {
            projectileArray.push(new Projectile(player.x, player.y-75));
            projectile.shoot();
        };
    };
    addEventListener('keydown', doKeyDown, true);
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    playersArray.forEach((player) => {
        player.update();
    });
    villainsArray.forEach((villain, villainIndex) => {
        villain.update();
        projectileArray.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - villain.x, projectile.y - villain.y);            
            if (dist - villain.radius - projectile.radius < 1) {
                villainsArray.splice(villainIndex, 1);
                projectileArray.splice(projectileIndex, 1);
            };
        });
    });
    projectileArray.forEach((projectile) => {
        projectile.shoot();
    });
};

start();
animate();
spawnVillains();