import {Component} from "react";

export class CloudMusicHelper extends Component {

    getDots = () => {
        let x, y, blackPixels = [], i
        let sixDots = this.generateSixDots()

        for (i = 0; i < 6; i++) {
            x = sixDots[i].x
            y = sixDots[i].y

            blackPixels.push(
                {"x": x, "y": y},
                {"x": x, "y": y - 1},
                {"x": x, "y": y + 1},
                {"x": x + 1, "y": y},
                {"x": x + 1, "y": y - 1},
                {"x": x + 1, "y": y + 1},
                {"x": x - 1, "y": y},
                {"x": x - 1, "y": y - 1},
                {"x": x - 1, "y": y + 1}
            )
        }

        return blackPixels
    }

    generateSixDots = () => {
        let screenSize = this.getScreenSize()
        let dots = [], dotX, dotY

        while (dots.length < 6) {
            dotX = Math.round((Math.random() * (screenSize.x - 1)))
            dotY = Math.round((Math.random() * (screenSize.y - 1)))
            dots.push({"x": dotX, "y": dotY})
        }
        return dots
    }

    getScreenSize = () => {
        let screenSize = {"x": 2000, "y": 1000}
        return screenSize
    }




    render() {
        return({})
    }
}