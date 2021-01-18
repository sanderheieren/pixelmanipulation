const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')

canvas.width = 1600;
canvas.height = 900;

const image1 = new Image();
image1.src = 'babyyoda.jpg';

image1.addEventListener('load', () => {
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  const scannedImage = ctx.getImageData(0,0,canvas.width, canvas.height);
  console.log(scannedImage);
  const scannedData = scannedImage.data;
  let count = 0
  for(let i = 0; i < scannedData.length; i += 4) {
    count++
    const total = scannedData[i] + scannedData[i + 1] + scannedData[i + 2];
    const averageColorValue = total/3;
    scannedData[i] = averageColorValue;
    scannedData[i+1] = averageColorValue;
    scannedData[i+2] = averageColorValue;
  }
  scannedImage.data = scannedData;
  console.log(count);
  ctx.putImageData(scannedImage, 0, 0)
})