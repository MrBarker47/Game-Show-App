//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUl = phrase.firstElementChild;
const button = document.querySelector('.btn__reset');
const divOne = document.getElementById('overlay');
const newDiv = phrase.firstElementChild;
const removeHeart = document.querySelectorAll(' .tries img');
let missed = null;
let match = null;



// Get a random phrases from the array that you created
const phrases = ['hello world', 'only the strong survive', 'work hard play hard', 'you wear the crown',
'everybody eats', 'you wear the crown'];

function getRandomPhrasesArray(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
    let newWord = array[randomNumber].split('');
     addPhraseToDisplay(newWord);
}

function addPhraseToDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
     li.textContent = array[i];
        newDiv.appendChild(li);
       if(array[i] === " " ) {
        li.classList.add('space');
       } else {
        li.classList.add('letter');
       }
     }
  }
  
function checkLetter(button) { 
  const list = phraseUl.children;
  console.log(checkLetter);
  for (let i = 0; i < list.length; i++) {
    const li = list[i];
    if(button === li.innerHTML) {
      li.classList.add('show');
      match = true;
    } else {
      match = false;
    }
  }
    return match;
  
}

function checkWin() {
  
}


button.addEventListener('click', () => {
    overlay.style.display = 'none';
    getRandomPhrasesArray(phrases);
  });


qwerty.addEventListener('click', (e) => {
  const button = e.target;
  if (button.tagName === 'BUTTON') {
      button.className = 'chosen';
      button.disabled = true;
       const buttonText = button.innerHTML;
       const matchResults = checkLetter(buttonText);
       if (matchResults === false) {
        missed++;
        removeHeart[missed - 1].src = 'images/lostHeart.png';
        console.log(removeHeart);
     }
   }   
});