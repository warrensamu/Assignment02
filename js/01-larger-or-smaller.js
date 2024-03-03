let intOne = prompt('Enter your first integer:')
let intTwo = prompt('Enter your second integer:')

if (intOne > intTwo) {
    document.write(`${intOne} is larger`)
} else if (intTwo > intOne) {
    document.write(`${intTwo} is larger`)
} else {
    document.write("They are equal")
}

