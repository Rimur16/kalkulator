let _1 = 0
let _2 = 0
input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_1 + _2)
})
input.onButtonPressed(Button.B, function () {
    _2 += 1
    basic.showNumber(_2)
})
