export const Snake_Speed = 1
const snake = [{ x: 11, y: 11 }]

export function updateSnake(){
    for (let i = snake.length - 2; i >= 0; i--){
        snake[i +1]= {...snake[i]}
    }
    snake[0].x += 1
    snake[0].y += 0
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