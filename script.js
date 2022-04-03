const options = ['Rock', 'Paper', 'Scissors']

function computerPlay() {   
    return options[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {

    let player = options.indexOf(playerSelection)
    let computer = options.indexOf(computerSelection)
    
    return player === computer ? 'Tie'
        : (player + 1) % 3 === computer ? 'Lose'
        : 'Win'
}


function game() {
    let score = [0, 0]
    let player
    let computer
    
    while (score[0] < 5 && score[1] < 5) {
        
        player = getPlayerInput()
        if (player === null) { return null }
        
        player = capitalise(player)
        if (options.includes(player)) {
            
            console.log('You played: ' + player)
            computer = computerPlay()
            console.log('Computer played: ' + computer)
            result = playRound(player, computer)
            console.log(result)
            
            result === 'Win' ? score[0]++
            : result === 'Lose' ? score[1]++
            : null /*do nothing*/
            
            console.log('Score: ' + score[0] + ' - ' + score[1])

        } else {
            console.log(player + ' Not a valid entry. Please try again.')
        }
    }
    
    console.log(score[0] === 5 ? 'You win!' : 'Computer wins :(')
}


/*Helper functions*/
function capitalise(word) {

    return !/^[a-zA-Z]/.test(word) ? word
        : word[0].toUpperCase() + word.slice(1).toLowerCase()

}

function getPlayerInput() {

    let player = window.prompt('Enter rock, paper, or scissors')
    
    if (player === null) {
        console.log('Game terminated.')
        return null
    }
    return player
}

game()


