'use strict'

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp(){
    // console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}:${ms}`;

    // setTimeout(countUp(), 10);

    timeoutId = setTimeout( () => {
      countUp();
    }, 10);
  }


  function setButtonStateInicial(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateRunnnig(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateStopped(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setButtonStateInicial();

  start.addEventListener('click',() => {
    if (start.classList.contains('inactive') === true){
      return;
    }
    setButtonStateRunnnig();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click',() => {
    if (stop.classList.contains('inactive') === true){
      return;
    }
      setButtonStateStopped();
      clearTimeout(timeoutId);
      elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click',() => {
    if (reset.classList.contains('inactive') === true){
      return;
    }
      timer.textContent = '00:00.000';
      elapsedTime = 0;
  });
}

// const ggg = function(a, b){
//   return a + b;
// }

// const ggg = (a, b) => {
//   return a + b;
// }

// const ggg = (a, b) => a + b;


  // return console.log(a + b);
  





// start.addEventListener('click',A);


