import { Snake_Speed, renderSnake, updateSnake } from './snake.js'

let lastRenderTime = 0
const board = document.getElementById('board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) 
    return 
    //console.log('Rendering')
    lastRenderTime = currentTime
    updateGame()
    renderGame()
}
window.requestAnimationFrame(main)

function updateGame(){
    updateSnake()
}

function renderGame(){
    board.innerHTML= ''
    renderSnake(board)
}
