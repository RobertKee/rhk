import generate from "@babel/generator"

export default getDots = () => {
    let x, y, blackPixels = []
    let sixDots = this.generateSixDots

    for (i = 0; i < 6; i++) {
        x = sixDots[i].x
        y = sixDots[i].y

    blackPixels.add(
        {"x":x, "y":y},
        {"x":x, "y":y-1},
        {"x":x, "y":y+1},
        {"x":x+1, "y":y},
        {"x":x+1, "y":y-1},
        {"x":x+1, "y":y+1},
        {"x":x-1, "y":y},
        {"x":x-1, "y":y-1},
        {"x":x-1, "y":y+1}
        )
    }
    
    return blackPixels
}

generateSixDots = () => {
    let screenSize = this.getScreenSize
    let dots = [], dotX, dotY

    while (dots.length < 6) {
        dotX = Math.round(Math.random() * (screenSize.x-1))
        dotY = Math.round(Math.random() * (screenSize.y-1))
    
        dots.add({"x": dotX, "y": dotY})
    }

    return dots
}

getScreenSize = () => {
    let screenSize = [2000,1000]
    return screenSize
}