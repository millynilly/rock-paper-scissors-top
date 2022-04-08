const options = ['Rock', 'Spock', 'Paper', 'Lizard', 'Scissors']
const resultPrint = ['Tie :|', 'Win :)', 'Lose :(']

const btns = document.querySelectorAll('button')
const dRound = document.querySelector('#round')
const dResult = document.querySelector('#result')

let score = [0, 0]
let reset = false


/*Add button event listeners*/
btns.forEach( (btn) => {
    btn.addEventListener('click', () => {
        if (reset) { clearDisplay() }
        playRound(btn.id, computerPlay())
        isGameEnd()
    })
})


function playRound(player, computer) { 
    
    let p = options.indexOf(player)
    let c = options.indexOf(computer)
    
    /* % does not work as expected on neg numbers. This does.*/
    let diff = (((p - c) % 5) + 5) % 5
    
    let result = diff === 0 ? 0
    : diff === 1 || diff === 2 ? 1
    : 2
    
    /*Update score*/
    result === 1 ? score[0]++
    : result === 2 ? score[1]++
    : null
    
    displayRound(player, computer, result)
}


function computerPlay() {   
    return options[Math.floor(Math.random()*5)]
}


function displayRound(player, computer, result) {

    console.log(player, computer,result)
    dRound.innerText = `You played: ${player}
    Computer played: ${computer}
    ${resultPrint[result]}
    Score: ${score[0]} - ${score[1]}`
}


function isGameEnd() {
    
    const winScore = 5
    
    if (score[0] === winScore) {
        dResult.innerText = `Game over
        You win!`
        reset = true
    }
    if (score[1] === winScore) {
        dResult.innerText = `Game over
        You lose.`
        reset = true
    }
}


function clearDisplay() {

    dRound.innerText = ''
    dResult.innerText = ''
    score = [0, 0]
    reset = false
}



