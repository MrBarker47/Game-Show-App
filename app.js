//Getting the elements by their ID's and Classes
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const button = document.querySelector('.btn__reset');
const divOne = document.getElementById('overlay');
// const newDiv = document.querySelector('ul');
let missed = 0;



const phrases = ['hello world', 'only the strong survive', 'work hard play hard',
'everybody eats', 'you wear the crown'];

// Get a random phrases from the array that you created
// function getRandomPhrasesArray(array) {
// const randomNumber = Math.floor(Math.random() * array.length);
//    let newWord =  array[randomNumber].split('');
//     let word = phrases[0];
//     return phrases;
// }


// function addPhraseToDisplay(array) {
//     for (let i = 0; i < array.length; i++) {
//     const li = document.createElement('li');
//       li.textContent = 'array[i]';
//       li.className('letter');
//        newDiv.appendChild(li);
//        break;
//     }

// }



// button.addEventListener('click', () => {
//     overlay.style.display = 'none';
//     getRandomPhrasesArray(phrases);
//   });

