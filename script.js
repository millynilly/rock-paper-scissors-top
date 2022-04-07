const options = ['Rock', 'Spock', 'Paper', 'Lizard', 'Scissors']

function computerPlay() {   
    return options[Math.floor(Math.random()*5)]
}

function playRound(playerSelection, computerSelection) {

    let player = options.indexOf(playerSelection)
    let computer = options.indexOf(computerSelection)
    let diff = (player - computer) % 5

    return diff === 0 ? 'Tie :|'
        : diff === 1 || diff === 2 ? 'Win :)'
        : 'Lose :('
}

function game() {
    let score = [0, 0]
    let player
    let computer
    const winScore = 3
    
    while (score[0] < winScore && score[1] < winScore) {
        
        player = getPlayerInput()
        if (player === null) { return null }
        
        player = capitalise(player)
        if (options.includes(player)) {
            
            computer = computerPlay()
            result = playRound(player, computer)

            /*Update score*/
            result === 'Win :)' ? score[0]++
            : result === 'Lose :(' ? score[1]++
            : null
            
            console.log('You played: ' + player)
            console.log('Computer played: ' + computer)
            console.log(result)
            console.log('Score: ' + score[0] + ' - ' + score[1])

        } else {
            console.log('Not a valid entry. Please try again.')
        }
    }   
    console.log(score[0] === 5 ? 'You win!' : 'Computer wins :(')
}



/*Helper functions*/

function capitalise(word) {

    /*Capitalises the first letter and converts the rest to lowercase*/
    return !/^[a-zA-Z]/.test(word) ? word
        : word[0].toUpperCase() + word.slice(1).toLowerCase()

}

function getPlayerInput() {

    let player = window.prompt('Enter rock, paper, or scissors')
    
    /*If Cancel clicked return null*/
    if (player === null) {
        console.log('Game terminated.')
        return null
    }
    return player
}

game()


