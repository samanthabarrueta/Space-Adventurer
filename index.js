const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Villain {
    constructor(x) {
        this.x = x;
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
        this.draw()
        this.y = this.y + this.velocity.y;
    };
};
const villains = new Villain(50, 50);



const animate = () => {
    requestAnimationFrame(animate);
    villains.update();
};

animate();