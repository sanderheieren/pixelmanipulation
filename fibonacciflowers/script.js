const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
// ctx.globalCompositeOperation = 'xor'
ctx.globalCompositeOperation = 'xor'
hue = Math.random() * 360;

let number = 0;
let scale = 4;
let hit = false;

function drawFlower() {
  let angle = number * 10;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + canvas.width / 2;
  let posY = radius * Math.cos(angle) + canvas.height / 2;
  
  ctx.fillStyle =  `hsl(${hue},100%, 50%)`;
  ctx.strokeStyle =  'lightgray'//`hsl(${hue},100%, 50%)`;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(posX, posY, 8, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  if(!hit){
    number++;
  } else {
    number--;
  }
  hue++;
}

function animate() {
  drawFlower();
  if(number > 3000) {
    hit = true;
    return
  }
  requestAnimationFrame(animate);
}

animate();