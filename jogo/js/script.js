const mario = document.querySelector('.mario');
const pipe =  document.querySelector('.pipe');

const jump = () => {
 mario.classList.add('jump');
 setTimeout(() => {
  mario.classList.remove('jump');
 }, 500);
}

const loop = setTimeout(() =>{
 const pipePosition = pipe.offsetleft;
 const marioPosition = +Window.getComputedStyle(mario).bottom.replace('px', '');
 
 if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  
  pipe.style.animation = 'none';
  pipe.style.left = '${pipePosition}px';

  mario.style.animation = 'none';
  mario.style.left = '${marioPosition}px';

  mario.src = './images/game-over.png';
  mario.style.whidth = '75px'
  mario.style.height = '50px'

  clearInterval(loop);

 }

}, 10)

document.addEventListener('keydown', jump);