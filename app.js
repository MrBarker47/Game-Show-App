//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
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

function addPhraseToDisplay(phrases) {
    for (let i = 0; i < phrases.length; i++) {
    const li = document.createElement('li');
      li.append('ul');
      li.classList.add('letter')
    }

}

function checkLetter(button) {
    const storage = document.querySelectorAll('li');
    let match = null;

    for(let i = 0; i < li.length; i++) {
      if (button == li ) {
        
      }
    }
}











button.addEventListener('click', () => {
    console.log('clicked');


});

