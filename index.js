const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let playersArray = [];
let villainsArray = [];
let projectileArray = [];

const game = {
    score: 0, 
    lives: 3
};

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 25;
        this.icon = document.getElementById('user');
    };
    draw() {
        ctx.drawImage(this.icon, this.x, this.y, 50, 50);
    }; 
    moveRight() {
        this.x += 25;
        this.draw();
    };
    moveLeft() {
        this.x -= 25;
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


const spawnVillains = setInterval(() => {
    villainsArray.push(new Villain())
}, 1500);



const start = () => {
    animate();

    playersArray.push(new Player(canvas.width/2, canvas.height-50));
    let player = new Player(canvas.width/2, canvas.height-50);
    player.draw();

    $('#startButton').hide();
    $('#directions').hide();

    const doKeyDown = (key) => {
        if(key.keyCode == 37) {             
            player.moveLeft();
            playersArray.pop();
            playersArray.push(new Player(player.x, player.y));
        };
        if(key.keyCode == 39) {
            player.moveRight();
            playersArray.pop();
            playersArray.push(new Player(player.x, player.y));
        };
        if(key.keyCode == 32) {
            projectileArray.push(new Projectile(player.x, player.y-75));
        };
    };
    addEventListener('keydown', doKeyDown, true);
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white'
    ctx.fillText(`Score: ${game.score}
    Lives: ${game.lives}`, 10, 50);

    const startAnimation = requestAnimationFrame(animate);

    playersArray.forEach((player) => {
        player.update();
    });
    projectileArray.forEach((projectile) => {
        projectile.shoot();
    });
    villainsArray.forEach((villain, villainIndex) => {
        villain.update();
        
        if (villain.y == canvas.height) {
            game.lives -= 1;
        };
        projectileArray.forEach((projectile) => {
            const villainProjectileDistance = Math.hypot(projectile.x - villain.x, projectile.y - villain.y);            
            if (villainProjectileDistance - villain.radius - projectile.radius < 1) {
                villainsArray.splice(villainIndex, 1);
                game.score += 1;
            };
        });
        playersArray.forEach((player, playerIndex) => {
            const villainPlayerDistance = Math.hypot(player.x - villain.x, player.y - villain.y);
            if (villainPlayerDistance - villain.radius - player.radius < 1) {
                playersArray.splice(playerIndex, 1);
                villainsArray.splice(villainIndex, 1);
                cancelAnimationFrame(startAnimation);
                setInterval(() => {
                    requestAnimationFrame(animate);
                }, 1500);
                game.lives -= 1;
            };
        });
    });
};