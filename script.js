// INTRO

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});


tl.to('.intro-text', {y: '0%', duration: 1, stagger: 0.2}); //stagger: 0.25
tl.to('.intro', {y: "-100%", duration: 0.8, delay: 0.5} ); //, "-=1"
tl.fromTo("#section--top", {opacity:0}, {opacity: 1, duration: 1});
tl.fromTo(".bottom", {opacity:0}, {opacity: 1, duration: 1} , "-=1");


// CURSOR 

let mouseCursor = document.querySelector('#cursor');


function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

window.addEventListener('mousemove', cursor);



// CANVAS
const canvas = document.querySelector('#drawCanvas');
// let colors = ['rgba(255,255,0,', 'rgba(255,0,0,','rgba(0,0,255,','rgba(255,0,255,','rgba(138,43,226,0,'];
let colors = ['violet','yellow','blueviolet','lightskyblue','red'];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishPosition() {
    painting = false;
    context.beginPath();
}


function draw(event) {
    let colorEnd = '';
    let randomColors = Math.floor(Math.random() * 5); 
    let randomAlpha = Math.random(1);
    //  console.log(randomColors);
    if (!painting) return;
    const left = event.clientX;
    const top = event.clientY;
    context.lineWidth = 20;
    context.lineCap = 'round';
    context.strokeStyle = colors[randomColors];
   // context.strokeStyle = colors[randomColors] + randomAlpha + ')';
    context.lineTo(left, top);
    context.stroke();
    context.beginPath();
    context.moveTo(left, top);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);




