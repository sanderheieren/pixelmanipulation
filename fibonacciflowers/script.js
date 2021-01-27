const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
ctx.globalCompositeOperation = 'destination-over'
// ctx.globalCompositeOperation = 'lighter'
hue = Math.random() * 360;

let number = 0;
let scale = 4;
let hit = false;

function drawFlower() {
  let angle = number * 10;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + canvas.width / 2;
  let posY = radius * Math.cos(angle) + canvas.height / 2;
  
  ctx.fillStyle = `hsl(${hue},100%, 50%)`;
  ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(posX, posY, Math.random()*radius, 0, Math.PI * 2);
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
  // if(number > 300) {
  //   hit = true;
  //   return
  // }
  requestAnimationFrame(animate);

}

animate();