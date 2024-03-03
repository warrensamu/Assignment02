let yourScore = prompt('Enter score:')

if (yourScore >= 60 && yourScore <= 69) {
    document.write('You received a D')
} else if (yourScore >= 70 && yourScore <= 79) {
    document.write('You received a C')
} else if (yourScore >= 80 && yourScore <= 89) {
    document.write('You received a B')
} else if (yourScore >= 90 && yourScore <= 100) {
    document.write('You received a A')
} else if (yourScore >= 1 && yourScore <= 60) {
    document.write('You received an F')
} else {
    document.write('Please enter a score between 1 and 100')
}