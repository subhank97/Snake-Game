import { inputDirection } from "./input.js"

export const SNAKE_SPEED = 4
const snake = [{ x: 11, y: 11 }]
let newSegments = 0

export function updateSnake(){

    addSegments()

    const input = inputDirection()

    for (let i = snake.length - 2; i >= 0; i--){
        snake[i +1]= {...snake[i]}
    }
    snake[0].x += input.x
    snake[0].y += input.y
}

export function renderSnake(board){
    snake.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement)
    })
}

export function growSnake(amount){
    newSegments += amount 
}

export function onSnake(position){
    return snake.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for (let i = 0; i < newSegments; i++){
        snake.push({...snake[snake.length - 1]})
    }
    newSegments = 0
}