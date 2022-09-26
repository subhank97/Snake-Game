import { Snake_Speed, renderSnake } from './snake.js'

let lastRenderTime = 0
const board = document.getElementById('board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) 
    return 
    console.log('Rendering')
    lastRenderTime = currentTime

    render()
}
window.requestAnimationFrame(main)

function render(){
    renderSnake(board)
}
