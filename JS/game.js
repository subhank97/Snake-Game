import { SNAKE_SPEED, renderSnake, updateSnake } from '../JS/snake.js'
import { renderFood, updateFood } from './food.js'

let lastRenderTime = 0
const board = document.getElementById('board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) 
    return 
    //console.log('Rendering')
    lastRenderTime = currentTime
    updateGame()
    renderGame()
}
window.requestAnimationFrame(main)

function updateGame(){
    updateSnake()
    updateFood()
}

function renderGame(){
    board.innerHTML= ''
    renderSnake(board)
    renderFood(board)
}

