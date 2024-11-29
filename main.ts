basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(100)
        if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
        }
    }
})
