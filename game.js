let lastRenderTime = 0

function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime
    //console.log(secondsSinceLastRender)
}
window.requestAnimationFrame(main)