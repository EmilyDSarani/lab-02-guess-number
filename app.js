// import functions and grab DOM elements
import { comparison } from './utils.js';

const userGuessEl = document.getElementById('number-input');
const guessButtonEl = document.getElementById('guess-button');
const resultsEl = document.getElementById('results');
//const resetEl = document.getElementById('reset');


let correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);

let numberofGuesses = 3;
let remains = numberofGuesses;

guessButtonEl.addEventListener('click', () => {

    let currentGuess = (Number(userGuessEl.value));
    let res = comparison (currentGuess, correctNumber);

    if (res === 0){
        resultsEl.textContent = `Ding Ding Ding! Correct!`;
    } else if (res === 1){
        resultsEl.textContent = `Big Oof, that\'s too high my dude, you have ${remains--} guesses left`;
    } else if (res === -1) {
        resultsEl.textContent = `Woooooah there my Dude, that's too low, you have ${remains--} guesses left`;
    } else {
        resultsEl.textContent = ` The correct number is: ${correctNumber}. Thanks for playing My Dudes.`;
    }
        
  
});



// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
