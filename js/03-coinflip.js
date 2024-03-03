let randomNum = Math.round(Math.random())
let coinFlip = randomNum
let choice = prompt('Heads or Tails?')

if (coinFlip < 1) {
    if (choice === 'Heads') {
        alert('The flip was heads and you chose heads...you win!')
    } else {
        alert('The flip was heads but you chose tails...you lose!')       
    }
} else {
    if (choice === 'Tails') {
        alert('The flip was tails and you chose tails...you win!')
    } else {
        alert('The flip was tails but you chose heads...you lose!')       
    }
}