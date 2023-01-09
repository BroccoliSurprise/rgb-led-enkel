input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        bitbot.ledShift()
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    bitbot.ledRotate()
    basic.pause(100)
    bitbot.ledClear()
    bitbot.setPixelColor(0, bitbot.convertRGB(0, 0, 0))
})
bitbot.setLedColor(0xFF0000)
basic.forever(function () {
    bitbot.ledRainbow()
})
