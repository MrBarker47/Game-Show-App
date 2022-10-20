//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
const divOne = document.getElementById('overlay');
const newDiv = phrase.firstElementChild;
let missed = 0;
let match = 0;



// Get a random phrases from the array that you created
const phrases = ['hello world', 'only the strong survive', 'work hard play hard',
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
      li.classList.add('letter');
       newDiv.appendChild(li);
  
   }
}

function checkLetter(button) {
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {

  }
}

button.addEventListener('click', () => {
    overlay.style.display = 'none';
    getRandomPhrasesArray(phrases);
  });

