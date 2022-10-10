//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
const divOne = document.getElementById('overlay');
const divTwo = document.getElementById('phrase');

let missed = 0;



const phrases = ['Hello World', 'Only The Strong Survive', 'Work Hard Play Hard',
'EveryBody Eats', 'You Wear The Crown'];

// Get a random phrases from the array that you created
function getRandomPhrasesArray(array) {
const randomNumber = Math.floor(Math.random() * array.length);
   let newWord =  array[randomNumber].split('');
    let word = phrases[0];
    return phrases;
}

function addPhraseToDisplay(array) {
    for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
      li.textContent = 'array[i]';
      li.classList.add('letter');
      li.append('ul');
      break;
    }

}

button.addEventListener('click', () => {
    console.log('clicked');
    overlay.style.display = 'none';
    getRandomPhrasesArray(phrases);
  });

