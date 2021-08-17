// import functions and grab DOM elements
import { comparison } from './utils.js';

const userGuessEl = document.getElementById('number-input');
const guessButtonEl = document.getElementById('guess-button');
const resultsEl = document.getElementById('results');

let correctNumber = Math.ceil(Math.random() * 20);

let remains = 3;

guessButtonEl.addEventListener('click', () => {

    let currentGuess = (Number(userGuessEl.value));
    let res = comparison (currentGuess, correctNumber);

    if (res === 0){
        resultsEl.textContent = `Ding Ding Ding! Correct!`;
    } else if (res === 1){
        resultsEl.textContent = `Big Oof, that\'s too high my dude, you have ${remains}`;
    } else {
        resultsEl.textContent = `Woooooah there, thatta there is done too low${remains}`;
    }

});


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
