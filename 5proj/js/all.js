const time = document.getElementById('time');
const container = document.getElementById('container');
  greeting = document.getElementById('greeting');
  names = document.getElementById('name');
  focus = document.getElementById('focus');

  function showTime(){
      let today = new Date();
      hour = today.getHours();
      min = today.getMinutes();
      sec = today.getSeconds();

    //   set am or pm
    const ampm = hour >= 12 ? 'PM' : 'AM';
    
    // 12hour format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm} `;
    setTimeout(showTime, 1000);
}
// addZero
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function rndmImg(){
  return Math.floor(Math.random()*6);
}

var i = 0;
setInterval(function() {
      container.style.backgroundImage = `url(./img/${i}.jpg)`;
      i = i + 1;
      if (i == 7) {
        i =  0;
      }
}, 5000);

// function backGround(){
//   container.style.backgroundImage = `url(./img/${rndmImg()}.jpg)`;
//   container.style.backgroundSize = "90% 100%";
//   container.style.backgroundRepeat = "no-repeat";
//   container.style.backgroundPosition = "center";
// }

// setBackground and Greeting
function setBgGreet(){
  let today = new Date();
  hour = today.getHours();

  if(hour<12){
     greeting.textContent = 'Good Morning';
  }
  else if(hour<18){
    greeting.textContent = 'Good afterNoon';
  }
  else{
    greeting.textContent = 'Good Evening';
  }
}

function setFocus(e){
  if(e.type ==='keypress'){
    if(e.which==13 || e.keyCode==13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }
  else{
    localStorage.setItem('focus', e.target.innerText);
  }
}

function getFocus(){
  if(localStorage.getItem('focus')===null){
    focus.textContent = '[Enter Focus]';
  }
  else{
    focus.textContent = localStorage.getItem('focus');
  }
}

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
// backGround();
getFocus();