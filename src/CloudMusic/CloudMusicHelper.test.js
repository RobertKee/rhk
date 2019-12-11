import React from 'react';
import {shallow} from "enzyme";
import {CloudMusicHelper} from "./CloudMusicHelper";

describe('<CloudMusicHelper />', () => {

    const wrapper = shallow(<CloudMusicHelper />)

    it('should render', () => {
        wrapper
    })

    it('should return the screen size', () => {
        let screenSize = wrapper.instance().getScreenSize()
        expect(screenSize.x).toBe(2000)
        expect(screenSize.y).toBe(1000)
    });

    it('should generate six dots', () => {
        let fn = jest.fn()
        fn.mockReturnValue({x:2000,y:1000});
        wrapper.instance().getScreenSize = fn

        let sixDots = wrapper.instance().generateSixDots()

        expect(sixDots[0].x).toBeLessThan(2000)
        expect(sixDots[0].y).toBeLessThan(1000)
    });

    it('should generate the points of six black squares', () => {
        let fn = jest.fn()
        let xValue = 1684
        let yValue = 535

        fn.mockReturnValue([
            {x: xValue, y: yValue},
            {x: xValue, y: yValue},
            {x: xValue, y: yValue},
            {x: xValue, y: yValue},
            {x: xValue, y: yValue},
            {x: xValue, y: yValue}
        ]);
        wrapper.instance().generateSixDots = fn

        let sixSquares = wrapper.instance().getDots()

        expect(sixSquares[0].x).toBe(xValue)
        expect(sixSquares[0].y).toBe(yValue)
        expect(sixSquares[1].x).toBe(xValue)
        expect(sixSquares[1].y).toBe(yValue-1)
        expect(sixSquares[2].x).toBe(xValue)
        expect(sixSquares[2].y).toBe(yValue+1)
    })
})