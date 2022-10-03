//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
let missed = 0;


const phrases = ['Hello World', 'Only The Strong Survive', 'Work Hard, Play Hard',
'EveryBody Eats', 'You Wear The Crown'];

// Get a random phrases from the array that you created
function getRandomPhrasesArray(phrases) {
   let newWord =  phrase.split('');
    let word = phrases[0];
    return phrases;
}

function addPhraseToDisplay(phrases) {
    const li = document.createElement('li');
    for (let i = 0; i < phrases.length; i++) {
     li.append('ul');
    }

}

function checkLetter(button) {
    
}





// button.addEventListener('click', () => {
//     console.log('clicked');


// });

