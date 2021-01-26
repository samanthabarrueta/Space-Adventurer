const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Villain {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 15;
        this.weight = 2;
        this.direction = 1;
    };
    update() {
        this.y += this.weight;
    };
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };
};
const villain1 = new Villain(50, 50);

const animate = () => {
    villain1.update();
    villain1.draw();
};

animate();

