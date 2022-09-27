import { SNAKE_SPEED, renderSnake, updateSnake, snakeHead, snakeIntersection} from './snake.js'
import { renderFood, updateFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const board = document.getElementById('board')

function main(currentTime){
    if (gameOver) {
        return alert('you lose')
    }
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
    checkDeath() 
}

function renderGame(){
    board.innerHTML= ''
    renderSnake(board)
    renderFood(board)
}

function checkDeath(){
    gameOver = outsideGrid(snakeHead()) || snakeIntersection()
}

