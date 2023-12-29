//MAPEAMENTOS
const userChoiceImg = document.querySelector('.userChoice')
const machineChoiceImg = document.querySelector('.machineChoice')
const userPoints = document.querySelector('.user-points')
const machinePoints = document.querySelector('.machine-points')
const restart = document.querySelector('.restart')
const messageArea = document.querySelector('#message-area')
const message = document.querySelector('.message')

//ENUM DOS ELEMENTOS
const ELEMENTS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

//MOSTRA ESCOLHA DO USUÁRIO
const userChoice = choice => {
    userChoiceImg.src = `assets/${choice}-left.png`

    //CHAMA A FUNÇÃO SCORES, PASSANDO A ESCOLHA DO USUÁRIO E DA MÁQUINA
    score(choice, machineChoice())
}

//MOSTRA ESCOLHA DA MÁQUINA
const machineChoice = () => {
    const choices = [ELEMENTS.ROCK, ELEMENTS.PAPER, ELEMENTS.SCISSORS]
    let x = Math.floor(Math.random() * 3)
    const choice = choices[x]
    machineChoiceImg.src = `assets/${choice}-right.png`
    return choice
}

//MOSTRA JOGADAS E RESULTADO
const show = () =>{
    userChoiceImg.style.visibility = 'visible'
    machineChoiceImg.style.visibility = 'visible'
    messageArea.style.visibility = 'visible'
}

//ESCONDE O RESULTADO
const hidden = () =>{
    messageArea.style.visibility = 'hidden'
}


//CONDICIONAIS PARA MUDANÇA DO PLACAR
let userPts = 0
let machinePts = 0
const time = 1200

const score = (userChoice, machineChoice) => {
    if (
        (userChoice == ELEMENTS.ROCK && machineChoice == ELEMENTS.SCISSORS)
        ||
        (userChoice == ELEMENTS.PAPER && machineChoice == ELEMENTS.ROCK)
        ||
        (userChoice == ELEMENTS.SCISSORS && machineChoice == ELEMENTS.PAPER)
    ) {
        show()
        setTimeout(() => {
            hidden()
        }, time)
        const winMessages = ['Boa!', 'Perfeito!', 'É isso aí!', 'Uhuuu!', 'Show de bola!']
        let x = Math.floor(Math.random() * 5)
        message.innerHTML = winMessages[x]
        userPts++
        userPoints.innerHTML = userPts
    } else if (userChoice == machineChoice) {
        show()
        setTimeout(() => {
            hidden()
        }, time)
        message.innerHTML = 'Empate!'
    } else {
        show()
        setTimeout(() => {
            hidden()
        }, time)
        const loseMessages = ['Ops...', 'Vish...', 'Ah não...', 'Ah...', 'Puts...']
        let x = Math.floor(Math.random() * 5)
        message.innerHTML = loseMessages[x]
        machinePts++
        machinePoints.innerHTML = machinePts
    }
}

//ZERA AS VARIÁVEIS E ZERA O PLACAR
const clear = () =>{
    userPts = 0
    machinePts = 0
    userPoints.innerHTML = 0
    machinePoints.innerHTML = 0
    userChoiceImg.style.visibility = 'hidden'
    machineChoiceImg.style.visibility = 'hidden'
}

restart.addEventListener('click', clear)

