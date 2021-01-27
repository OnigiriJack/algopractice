const assert = require("assert");
const { expect } = require("chai");
const chai = require('chai')

const { swipeLeft, kennyLeft } = require("../src/2048")

console.log(swipeLeft)
describe("2048 game swipe left function", () => {
    it("Returns a 2D array", () => {
        let grid = [
            [4, 4, 4, 4],
            [4, 2, 0, 2],
            [0, 0, 4, 0],
            [4, 4, 2, 2]
        ]
        expect(grid).to.be.an('array')
    })
    it("Solves: ", () => {
        let grid = [
            [4, 4, 4, 4],
            [4, 2, 0, 2],
            [0, 0, 4, 0],
            [4, 4, 2, 2]
        ]
        console.log("Before swipe:")
        console.log(grid)
        let swiped = swipeLeft(grid)
        console.log(swiped)
        expect(swiped).to.deep.equal([
            [8, 8, 0, 0],
            [4, 4, 0, 0],
            [4, 0, 0, 0],
            [8, 4, 0, 0]
        ])
    })


    it("Solves: ", () => {
        let grid = [
            [0, 0, 2, 16],
            [16, 2, 16, 0],
            [0, 32, 0, 32],
            [8, 4, 2, 2]
        ]
        console.log("Before swipe:")
        console.log(grid)
        let swiped = swipeLeft(grid)
        console.log(swiped)
        expect(swiped).to.deep.equal([
            [2, 16, 0, 0],
            [16, 2, 16, 0],
            [64, 0, 0, 0],
            [8, 4, 4, 0]
        ])
    })


    it("Solves: ", () => {
        let grid = [
            [0, 0, 2, 16],
            [16, 2, 16, 0],
            [0, 32, 0, 32],
            [8, 4, 2, 2]
        ]
        console.log("Before swipe:")
        console.log(grid)
        let swiped = swipeLeft(grid)
        console.log(swiped)
        expect(swiped).to.deep.equal([
            [2, 16, 0, 0],
            [16, 2, 16, 0],
            [64, 0, 0, 0],
            [8, 4, 4, 0]
        ])
    })

    it(" Kenny Solves: ", () => {
        let grid = [
            [0, 0, 2, 16],
            [16, 2, 16, 0],
            [0, 32, 0, 32],
            [8, 4, 2, 2]
        ]
        console.log("Before swipe:")
        console.log(grid)
        let swiped = kennyLeft(grid)
        console.log(swiped)
        expect(swiped).to.deep.equal([
            [2, 16, 0, 0],
            [16, 2, 16, 0],
            [64, 0, 0, 0],
            [8, 4, 4, 0]
        ])
    })

    it("Kenny Solves: ", () => {
        let grid = [
            [4, 4, 4, 4],
            [4, 2, 0, 2],
            [0, 0, 4, 0],
            [4, 4, 2, 2]
        ]
        console.log("Before swipe:")
        console.log(grid)
        let swiped = kennyLeft(grid)
        console.log(swiped)
        expect(swiped).to.deep.equal([
            [8, 8, 0, 0],
            [4, 4, 0, 0],
            [4, 0, 0, 0],
            [8, 4, 0, 0]
        ])
    })
})