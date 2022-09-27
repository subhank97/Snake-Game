import { growSnake, onSnake } from "./snake.js"

let food = { x:5, y:5 }
const growRate = 1

export function updateFood(){
    if (onSnake(food)) {
        growSnake(growRate)
        food = { x:20, y:10 }
    }
}

export function renderFood(board){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}