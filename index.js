canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
       
let villainsArray = [];
let playerArray = [];

class Player {
    constructor(x) {
        this.x = canvas.width/2;
        this.y = canvas.height;
        this.dx = 5;
        this.size = 25;
        this.weight = 2;
        this.velocity = {
            x: 1,
            y: 1
        };
    };
    draw() {
        // document.addEventListener('keydown', doKeyDown, true);
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }; 
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        console.log(this.x)
    };
};

// const doKeyDown = (key) => {
//     if(key.keyCode == 37) { 
//         this.x -= this.dx;
//         console.log(this.x)
//     };
//     if(key.keyCode == 39) {
//         this.x += this.dx;
//         console.log(this.x)
//     };
// };

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

const spawnPlayers = () => {
    setInterval(() => {
        playerArray.push(new Player())
    }, 1500);
};

const animate = () => {
    requestAnimationFrame(animate);
    villainsArray.forEach((villain) => {
        villain.update()
    });
    playerArray.forEach((player) => {
        player.update()
    });
};

animate();
spawnVillains();
spawnPlayers();

// var lastDownTarget, canvas; 
// window.onload = function() { 
// canvas = document.getElementById('canvas'); 

// /* For mouse event */ 
// document.addEventListener('mousedown', function(event) { 
// lastDownTarget = event.target; 
// console.log('Mousedown Event'); 
// }, false); 
