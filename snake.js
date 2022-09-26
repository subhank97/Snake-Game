export const Snake_Speed = 1
const snake = [{ x: 11, y: 11 }]

export function renderSnake(board){
    snake.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement)
    })
}