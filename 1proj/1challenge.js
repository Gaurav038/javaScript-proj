console.log("hello great man its working")
function tellage() {
    var birth = prompt('what is ur datebirth year');
    var days = (2018-birth)*365;
    var h1make = document.createElement('h1');
    var textans = document.createTextNode('your age is ' + days +`day's`);
    h1make.setAttribute('id', 'tell');
    h1make.appendChild(textans);
    document.getElementById('rslt-cont-1').appendChild(h1make);
}

function reset(){
    document.getElementById('tell').remove();
}
// ------------challenge - 2 motivate---------------
function getmotivate(){
    var image = document.createElement('img');
    var div = document.getElementById('motivate-gen');
    image.src = "5 Ways.jpg";
    image.setAttribute('width', '250px');
    image.setAttribute('alt', 'motivate');
    div.appendChild(image);
}
// ------------challenge-3 RPS---------------
function rpsgame(yourchoice){
// console.log(yourchoice);
var humanchoice, botchoice;
humanchoice = yourchoice.id;
console.log(humanchoice);
botchoice = numtochoice(randtorps());
console.log(botchoice,' this is bot');

var result = decidewinner(humanchoice, botchoice);
console.log(result);

var message = finalrslt(result[0]);
console.log(message);

rpsfrontend(humanchoice, botchoice, message);
}

function randtorps(){
    return Math.floor(Math.random()*3);

}
function numtochoice(number){
   return ['rock', 'paper', 'scissor'][number];
}

function decidewinner(yourchoice, computerchoice){
    var databases = {
       'rock':{'paper':0, 'scissor':1, 'rock':.5},
       'paper':{'paper':.5, 'scissor':0, 'rock':1},
       'scissor':{'paper':1, 'scissor':0.5, 'rock':0},
};
    var yourscore = databases[yourchoice][computerchoice];
    var computerscore = databases[computerchoice][yourchoice];
    return [yourscore, computerscore];
}

function finalrslt(yourscore){
      if(yourscore==0){
           return {'message': 'you lost', 'color':'red'};
      }
      else if(yourscore==1){
        return {'message': 'you win', 'color':'green'};
      }
      else{
        return {'message': 'draw', 'color':'yellow'};
      }
}

function rpsfrontend(humanimage, botimage, message){
     var imagedatabase = {
         'rock': document.getElementById('rock').innerText,
         'paper': document.getElementById('paper').innerText,
         'scissor': document.getElementById('scissor').innerText,
     }
     //lets remove all the images
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissor').remove();

     var humandiv = document.createElement('div');
     var botdiv = document.createElement('div');
     var messagediv = document.createElement('h3');

     humandiv.innerHTML = imagedatabase[humanimage];
     botdiv.innerHTML = imagedatabase[botimage];
     messagediv.innerHTML = "<h1 style='color: "+message['color']+"; font-size:60px; padding:30px; '> " +message['message'] +"</h1>"; 

     document.getElementById('box-rps-id').appendChild(humandiv);
     document.getElementById('box-rps-id').appendChild(messagediv);
     document.getElementById('box-rps-id').appendChild(botdiv);
}
//------challenge-4 Change the color of all button-----
var allbutton = document.getElementsByTagName('button');
console.log(allbutton);

var copyallbtn = [];
for(let i = 0; i<allbutton.length; i++){
    copyallbtn.push(allbutton[i].classList[1]);
}
console.log(copyallbtn);

function buttoncolorchange(buttonthingy){
     if(buttonthingy.value==='red'){
         redcolor();
     }
    else if(buttonthingy.value==='green'){
        greencolor();
    }
    else if(buttonthingy.value==='random'){
        randomcolor();
    }
    else{
        resetcolor();
    }
}
function redcolor(){
    for(let i = 0; i<allbutton.length; i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-one');
    }
}
function greencolor(){
    for(let i = 0; i<allbutton.length; i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-two');
    }
}
function resetcolor(){
    for(let i = 0; i<allbutton.length; i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(copyallbtn[i]);
    }
}
function randomcolor(){
    var choices = ['btn-1', 'btn-2', 'btn-3', 'btn-one', 'btn-two', 'btn-four'];
    for(let i = 0; i<allbutton.length; i++){
        let randomnum = Math.floor(Math.random()*5);
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(choices[randomnum]);
    }
}
//------------challenge - 5 Black jack--------
let blackjackgame = {
    'you':{'scorespan': '#your-jack-score', 'div':'#your-box','score':0},
    'dealer':{'scorespan': '#dealer-jack-score', 'div':'#dealer-box','score':0},
    'cards': ['2', '3','4','5','6','7','8','9','10','K','J','Q', 'A'],
    'cardmap': {'2':2, '3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10, 'A':[1, 11]},
    'wins': 0,
    'losses': 0,
    'draw':0,
    'isStand':false,
    'turnsOver': false,
};
console.log(blackjackgame['cards']);

const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer'];
const heatsound = new Audio('./blackjack_assets/sounds/swish.m4a');
const winsound = new Audio('./blackjack_assets/sounds/cash.mp3');
const losesound = new Audio('./blackjack_assets/sounds/aww.mp3');

document.querySelector('#heat-btn').addEventListener('click', blackjackhit);
document.querySelector('#stand-btn').addEventListener('click', dealerlogic);
document.querySelector('#deal-btn').addEventListener('click', blackjackdeal);

function blackjackhit(){
    if(blackjackgame['isStand']===false){
        let cardsindex = randomcard();
        showcard(YOU, cardsindex);
        updatescore(YOU, cardsindex);
        console.log(YOU['score']);
        showscore(YOU);
    }
}

function randomcard(){
    var randomindex = Math.floor(Math.random()*13);
    return blackjackgame['cards'][randomindex];
}
function showcard(activeplayer, rancard){
    if(activeplayer['score']<=21){
      let cardimage = document.createElement('img');
      cardimage.src = `./blackjack_assets/images/${rancard}.png`;
      document.querySelector(activeplayer['div']).appendChild(cardimage);
      heatsound.play();
    }
}
function updatescore(activeplayer, key){
    if(key==='A'){
        if(activeplayer['score'] + blackjackgame['cardmap']['A'][1]<=21){
            activeplayer['score'] += blackjackgame['cardmap']['A'][1];
        }
        else{
            activeplayer['score'] += blackjackgame['cardmap']['A'][0];
        }
    }
    else{
       activeplayer['score'] += blackjackgame['cardmap'][key]; 
    }  
}
function showscore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scorespan']).textContent = 'BUST!';
        document.querySelector(activeplayer['scorespan']).style.color ='red'; 
    }
    else{
   document.querySelector(activeplayer['scorespan']).textContent = activeplayer['score'];
    }
}
//-------------promise-------------------------------
function sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerlogic(){
    blackjackgame['isStand'] = true;
    while(DEALER['score']<16){
        let cardsindex = randomcard();
        showcard(DEALER, cardsindex);
        updatescore(DEALER, cardsindex);
        showscore(DEALER);
        await sleep(1000);
    }
     blackjackgame['turnsOver'] = true;   
     let winner = computewinner();
     showResult(winner);
}

function blackjackdeal(){
    
   if(blackjackgame['turnsOver']===true){

        blackjackgame['isStand'] = false;
        blackjackgame['turnsOver'] = false;
        let yourimage = document.querySelector('#your-box').querySelectorAll('img');
        for (let i = 0; i < yourimage.length; i++) {
            yourimage[i].remove();
        }
        let dealerimage = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i = 0; i < dealerimage.length; i++) {
            dealerimage[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector(YOU['scorespan']).textContent = 0;
        document.querySelector(DEALER['scorespan']).textContent = 0;

        document.querySelector(YOU['scorespan']).style.color = 'white';
        document.querySelector(DEALER['scorespan']).style.color = 'white';

        document.querySelector('#black-rslt').textContent = "Let's play";
        document.querySelector('#black-rslt').style.color = 'black';
    }
   
}
function computewinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
           blackjackgame['wins']++;
            winner = YOU;
        }
        else if(YOU['score']<DEALER['score']){
            blackjackgame['losses']++;
            winner = DEALER;
        }
        else if(YOU['score']===DEALER['score']){
            blackjackgame['draw']++;
        }
    }
    else if(YOU['score']>21 && DEALER['score']>21){
        blackjackgame['draw']++;
    }
    else if(YOU['score']>21 && DEALER['score']<=21){
        blackjackgame['losses']++;
        winner = DEALER;
    }
    console.log('winner is ', winner);
    return winner;
}

function showResult(won){
      let message, messColor;
      if(won===YOU){
          message = 'You Won!';
          messColor = 'green';
          winsound.play();
      }
      else if(won===DEALER){
        message = 'You LOSE!';
        messColor = 'red';
        losesound.play();
      }
      else{
        message = 'DRAW!';
        messColor = 'blue';
      }
      document.querySelector('#black-rslt').textContent = message;
      document.querySelector('#black-rslt').style.color = messColor;
}