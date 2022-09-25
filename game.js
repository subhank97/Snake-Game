let lastRenderTime = 0
const Snake_Speed = 1

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) 
    return 
    console.log('Rendering')
    lastRenderTime = currentTime
}
window.requestAnimationFrame(main)