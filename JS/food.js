import { growSnake, onSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = randomFoodPosition()
const GROW_RATE = 3

export function updateFood(){
    if (onSnake(food)) {
        growSnake(GROW_RATE)
        food = randomFoodPosition()
    }
}

export function renderFood(board){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}

function randomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

