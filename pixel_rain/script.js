const myImage = new Image();
// cross origin - png to base 64: https://onlinepngtools.com/convert-png-to-base64
myImage.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAfWgAwAEAAAAAQAAArwAAAAA/+EJjWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHBob3Rvc2hvcDpUcmFuc21pc3Npb25SZWZlcmVuY2U9IlYzMEM0R1pVRFdSeEYwSnZtSTd6Ii8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QBgUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACgcAVoAAxslRxwCAAACAAIcAmcAFFYzMEM0R1pVRFdSeEYwSnZtSTd6OEJJTQQlAAAAAAAQuQLTPycdgM76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NGrPGr6jIPTxTlX0Of3V1NVW2rbattqzgHTqXDclzx9lLaNGsb5QXQAUOAmZM3/Omr2hB9nJtsV22rbattqlSdRJGoNkaCNtoTtq0xNbbVtpqJ2paYSRG2B22rbapjaivmL6hsFJjcvuY0Oqpq7VttW21bbU963lvRUblbersePsdMH6QtNZwNiYIqczpg7ZOpaHuOG6eWdsRttW21bbVttUrRqmdqTCorbatpisqNUxprbakbattq22rbattqI5aKgPbR22rbattq22rbales+SduK+q+nYc+9aRKufUYXIaZsrNozBq7ej1Tp+G73gOjk22a22rTGqY2rbatMTUxtU6dURMVO0VO01E6KnbUjbVttW2JEeMoEMnSIEHARtsRttW21bbVttW21Z011eyn5Lq0mdN1LfHWgARlj0RMrBrG8d50Yt/NfTOH356LbG22rbattq22rbatMTSoia200nKiomJqdE1ttSNtW2LFSgYEy2s06EPUoUwRttDbattq22rbattq22qw9Y8X9KF0ahkW3NdNlfh46umy2XfVdnvhX8h2PPsvCbY221bbVttW21TpittqiYmpmNU6NWidU7aomNSdtWIjRmJip2TUxtDbattq22rbattq22rbattq15R6vaNX2iSltm1cVzUpenuuCva7+qva9bynRLW21bbVttW21TKZjtEw22rTGqdGqZia0TFbbUnbVMTFbbVttW21bbVttW21bbVttW21bbVpiaidFdT6D4x62Ksoez5UXHKGp7dlx/Zi60S5W8Zy0NbbVttW21bbVttWmJrbap0TSZmKmU6lRMVtGrRtU6NW21bbVttW21bbVttW21bbVttWmJrbatE6t2HHlr1+sfFW8cIoTW67knderpjLeQiMFrbattq22rbattq0xNaJ1aYmttq0TFbTq22pO2rbattq22rbattq22rbatp1aJittq0xNbbVttW21dp1vk3dC4DZRoSpFen2VBereRDUlrbattq22rbattq07VttU6NW21TE6ttq22pO2rbattq22rbattq0xq22qdtWjatp1RO1bbVttW21Zw3mpWiaQoga7rpOR6MXlUzBttq22rbattq22rTtW21bbVpia0Tq22rbak7attq22rbattq22rbattqnRq22qdtW21bbVtoqdtW21Yo5pSFJrpOh5DohcLtjbbVttW21bbVttU7ato1Ttq0xqnbVttUbao21bbVttW21bbVttW21bbVttW21Ttq22rRMVttU6NU6JrTE1MEHVhc8/aVQbattq22rbattq22qdE1omKnRNbbVO2rbao21Rtq22rbattq22rbattq22rbattq0xqnaK22rbattq22rbaiQlVEcs00nbVttW21bbVttW21adqjbVO2rbattq22rbao21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVlo1KSpNbbVttW21bbVttW21TtFbbVO2rbattq22rbao21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttSk7VttW21bbVpjVttW21bbVttU7attq22rbattqjbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVO2qNtU7attFTtq22rbao21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21TExW21Ttq0TFaYmttq22qNtW21bbVttW21bbVttW21bbVttW21bbVpiajbVttW21bbVttW21bbVttW21bbVttW21TG1bbVOjVttW21Ttq22qNtW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttU7ao21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW21bbVttW2ip0ap0ap21bbVttW0TW2ip0aM7aG21bbVttU7av/aAAgBAQABBQL+a0en3NGfvV7Vde1XV1T30+5X+aP8zUuodQ6uv81V1YLq6/cHencnto6/cq6V+/XvXtR0707affp/qurqGXT+Yq6h6d6dqd69q/eo6dtX1Ovev3Kdw6D/AFFr3q9PvV+9q6l5Or0+9V1en83V1+5R0/m9Hp/qGrq69tXX+Yq6vR6Onarq6/74K9z/ADle+nbV1/mqf6pr/vpq6/8AIjU/1bT/AH0V/wBRVde9XV1dXXtV1df+RTr/AL9K/wDl2OnagdP9/wDV17D/AH/1/wB/oNGTX/f4Di6/c8v+R2AfLL5RfLL5KnyyxEWYiykj/VlP9VJFShIDDAeAaUBmMPAMpakspZT/AKqIp24j/UwS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'

myImage.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 706;
  
  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

  let particlesArray = [];
  const numberOfParticles = 5000;

  class Particle {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 3.5;
      this.size = Math.random() * 1.5 + 1;
    }
    update() {
      this.y += this.velocity;
      if(this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width; 
      }
    }
    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill()
    }
  }

  function init() {
    for(let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle)
    }
  }
  init();
  function animate() {
    ctx.globalAlpha = 0.05;
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(0,0,canvas.width, canvas.height)
    for(let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update()
      particlesArray[i].draw()
    }
    requestAnimationFrame(animate)
  }
  animate()
});
