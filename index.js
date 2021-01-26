const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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



    // move() {
    //     canvas.addEventListener('keydown', event => {
    //         switch (event) {
    //             case 37:
    //                 $('#user').finish().animate({
    //                     left: '-=50'
    //                 });
    //             break;
    //             case 39:
    //                 $('#user').finish().animate({
    //                     left: '+=50'
    //                 });
    //             break;
    //         };
    //     });        
    // };







// canvas.addEventListener('keydown', event => {
//     switch (event) {
//         case 37:
//             $('#user').finish().animate({
//                 left: '-=50'
//             });
//         break;
//         case 39:
//             $('#user').finish().animate({
//                 left: '+=50'
//             });
//         break;
//         case 32:
//             $('#bullet').animate({
//                 bottom: '+=620'
//             });
//         break;
//     };
// });

// // newly spawned objects start at Y = 25
// var spawnLineY = 25;

// // spawn a new object every 1500ms
// var spawnRate = 1500;

// // set how fast the objects will fall
// var spawnRateOfDescent = 0.50;

// // when was the last object spawned
// var lastSpawn = -1;



// // save the starting time (used to calc elapsed time)
// var startTime = Date.now();

// // start animating
// animate();


// function spawnRandomObject(){

//     // select a random type for this new object
//     var t = document.getElementById('villain');

//     // About Math.random()
//     // Math.random() generates a semi-random number
//     // between 0-1. So to randomly decide if the next object
//     // will be A or B, we say if the random# is 0-.49 we
//     // create A and if the random# is .50-1.00 we create B

//     //if(Math.random()<0.50){t='red';}else{t='blue';}/////////////////////////////////////////////////////////////////////////////////////// 

//     // create the new object
//     var object = {
//         // set this objects type
//         type:t, 
//         // set x randomly but at least 15px off the canvas edges
//         x:Math.random()*(canvas.width-30)+15,
//         // set y to start on the line where objects are spawned
//         y:spawnLineY,
//     }

//     // add the new object to the objects[] array
//     objects.push(object);
// }



// function animate(){ 

//     // get the elapsed time
//     var time = Date.now();

//     // see if its time to spawn a new object
//     if(time>(lastSpawn+spawnRate)){
//         lastSpawn = time;
//         spawnRandomObject();
//     }

//     // request another animation frame
//     requestAnimationFrame(animate);

//     // clear the canvas so all objects can be 
//     // redrawn in new positions
//     ctx.clearRect(0,0,canvas.width,canvas.height);

//     // draw the line where new objects are spawned
//     ctx.beginPath();
//     ctx.moveTo(0,spawnLineY);
//     ctx.lineTo(canvas.width,spawnLineY);
//     ctx.stroke();

//     // move each object down the canvas
//     for(var i = 0;i<objects.length;i++){
//         var object = objects[i];
//         object.y+ = spawnRateOfDescent;
//         ctx.beginPath();
//         ctx.arc(object.x,object.y,8,0,Math.PI*2);
//         ctx.closePath();
//         ctx.fillStyle = object.type;
//         ctx.fill();
//     };

// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 


//     document.getElementsByClassName('actionButton').addEventListener('mousedown',function(){
//         var left = document.getElementsByClassName('moveDiv')[0].style.left;
//         left = left === '150px' ? 0 : '150px';
//         document.getElementsByClassName('moveDiv')[0].style.left = left;
//     });
// });

// <div class='moveDiv'>
//                             <img src='./assets/images/enemy.png' id='villain' alt='villain'  height='35px' width='35px'>
//                         </div>

//                         <div id='user' class='mt-auto'>
//                             <div class='row justify-content-center' id='bullet-row'>
//                                 <img src='./assets/images/shotx1.png' id='bullet'  alt='bullet' height='20px' width='20px'>
//                             </div>
//                             <div class='row mt-auto'>
//                                 <img src='./assets/images/user.png' alt='user icon' height='75px' width='50px' class='actionButton'>
//                             </div>
//                         </div>

   

