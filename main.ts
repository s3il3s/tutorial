let punkte = 0
let Hand = 0
input.onButtonPressed(Button.A, function () {
    punkte += 1
    basic.showNumber(punkte)
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            . . . # .
            . . # . .
            # # . . .
            . . # . .
            . . . # .
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # .
            # . . # .
            # . . # .
            # . . # .
            # # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    punkte = 0
})
basic.forever(function () {
	
})
