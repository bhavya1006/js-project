let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function(e) {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // to check the input
    if (isNaN(guess)){
        alert("Please enter a valid number!")
    } else if (guess<1){
        alert("Please enter a number more than 1!")
    } else if (guess>100){
        alert("Please enter a number less than 100!")
    } else {
        prevGuess.push(guess);

        if (numGuess === 10) {
            displayGuess(guess);
            displayMsg(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // high or low or near --> condition for logic
    if (guess === randomNumber) {
        displayMsg(`You guess the number right!`);
        endGame()
    } else if (guess < randomNumber){
        displayMsg(`Your number is too low!`);

    } else if (guess > randomNumber){
        displayMsg(`Your number is too high!`);

    }
}

function displayGuess(guess) {
    // display the no guess left | clean up method
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMsg(msg) {
    // will display value as a message
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    // ends the game
    userInput.value = ''
    userInput.setAttribute('disabled', '')

    playGame = false;

    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`

    

    

    startOver.appendChild(p)

    let ngbtn = document.querySelector('#newGame');
    ngbtn.setAttribute('style','border: #fff solid 2.1px; border-radius: 10px; margin: 30px 24%;padding: 7px 3px;background-color: #4545456e; color: #ffa900;border-style: none;')
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {

        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ``
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')

        startOver.removeChild(p)

        playGame = true
    })
}