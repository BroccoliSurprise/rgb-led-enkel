# LED-lys


##Steg 1 - Velkommen
Programmer lysene med kommandoer fra menyen til venstre.



```template
bitbot.setLedColor(0xFF0000)


```

```ghost
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        bitbot.ledShift()
    }
})

input.onGesture(Gesture.TiltLeft, function () {
	
})

bitbot.ledClear()
bitbot.setPixelColor(0, bitbot.convertRGB(0, 0, 0))
bitbot.ledRainbow()
bitbot.ledRotate()
basic.pause(100)
basic.forever(function () {
	
})
