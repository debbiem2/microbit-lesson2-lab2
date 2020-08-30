function drawTriangle () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= column; row++) {
            led.plot(column, row)
        }
    }
}
function drawRow (row: number) {
    for (let column = 0; column <= 4; column++) {
        led.plot(column, row)
    }
}
function drawDiag2 () {
    for (let row = 0; row <= 4; row++) {
        led.plot(4 - row, row)
    }
}
function drawSquare () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            led.plot(column, row)
        }
    }
}
function drawtrianglev2 () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if (column + row <= 4) {
                led.plot(column, row)
            }
        }
    }
}
function drawcheckerb () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if ((column + row) % 2 == 0) {
                led.plot(column, row)
            }
        }
    }
}
function drawSquare2 () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            led.plot(column, row)
        }
    }
}
function drawcheckerb2 () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if ((column + row) % 2 != 0) {
                led.plot(column, row)
            }
        }
    }
}
function drawDiag () {
    for (let row = 0; row <= 4; row++) {
        led.plot(row, row)
    }
}
drawcheckerb2()
