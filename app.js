//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
let missed = 0;


const phrases = ['You Win Some, You Lose Some', 'Only The Strong Survie', 'Work Hard, Play Hard',
'EveryBody Eats', 'You Wear The Crown'];

// Get a random phrases from the array that you created
function getRandomPhrasesArray(phrases) {
    const myWord = phrases.split(" ");
    let word = myWord[1];
}




// Do stuff any arr that os passed in, and add to '#phrase ul'
function addPhraseToDisplay() {
     for(let i = 0; i < li.length; i++) {
        const li = document.createElement('li');
        phrase.append('li');
  }
}







// button.addEventListener('click', () => {
//     console.log('clicked');
// });

