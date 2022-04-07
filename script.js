const options = ['Rock', 'Spock', 'Paper', 'Lizard', 'Scissors']
const resultPrint = ['Tie :|', 'Win :)', 'Lose :(']
let score = [0, 0]

const btns = document.querySelectorAll('button')
console.log(btns)

/*Add button event listeners*/
btns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        result = playRound(btn.id, computerPlay())
        updateScore(result)
        if (isGameEnd()) { score = [0, 0] }
    })
})

function computerPlay() {   
    return options[Math.floor(Math.random()*5)]
}

function playRound(playerSelection, computerSelection) { 

    let p = options.indexOf(playerSelection)
    let c = options.indexOf(computerSelection)

    /* % does not work as expected on neg numbers. This does.*/
    let diff = (((p - c) % 5) + 5) % 5
    
    let result = diff === 0 ? 0
        : diff === 1 || diff === 2 ? 1
        : 2
    
    console.log('You played: ' + playerSelection)
    console.log('Computer played: ' + computerSelection)
    console.log(resultPrint[result])
    
    return result
}


function updateScore(result) {

    result === 1 ? score[0]++
        : result === 2 ? score[1]++
        : null

    console.log('Score: ' + score[0] + ' - ' + score[1])
}


function isGameEnd() {
    
    const winScore = 3

    if (score[0] === winScore || score[1] === winScore) {
        console.log('Game over')
        console.log('Play again?')
        return true
    }
    return false
}

function newGame() {
    score = [0, 0]
}

// function game() {
//     let score = [0, 0]
//     let player
//     let computer
//     const winScore = 3
    
//     while (score[0] < winScore && score[1] < winScore) {
        
//         player = getPlayerInput()
//         if (player === null) { return null }
        
//         player = capitalise(player)
//         if (options.includes(player)) {
            
//             computer = computerPlay()
//             result = playRound(player, computer)

//             /*Update score*/
//             result === 'Win :)' ? score[0]++
//             : result === 'Lose :(' ? score[1]++
//             : null
            
//             console.log('You played: ' + player)
//             console.log('Computer played: ' + computer)
//             console.log(result)
//             console.log('Score: ' + score[0] + ' - ' + score[1])

//         } else {
//             console.log('Not a valid entry. Please try again.')
//         }
//     }   
//     console.log(score[0] === 5 ? 'You win!' : 'Computer wins :(')
// }



/*Helper functions*/

// function capitalise(word) {

//     /*Capitalises the first letter and converts the rest to lowercase*/
//     return !/^[a-zA-Z]/.test(word) ? word
//         : word[0].toUpperCase() + word.slice(1).toLowerCase()

// }

// function getPlayerInput() {

//     let player = window.prompt('Enter rock, paper, or scissors')
    
//     /*If Cancel clicked return null*/
//     if (player === null) {
//         console.log('Game terminated.')
//         return null
//     }
//     return player
// }

//game()


