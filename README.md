# LED-lys


##Steg 1 - Velkommen
Lag fine lys med kommandoer fra menyen til venstre.



```template
bitbot.setLedColor(0xFF0000)


```

```blocks
bitbot.setLedColor(0x0000FF)

input.onButtonPressed(Button.A, function () {
    bitbot.setPixelColor(0, 0x00FF00)
})

input.onGesture(Gesture.TiltLeft, function () {
    bitbot.ledRotate()
})


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
bitbot.setPixelColor(randint(0, 10), bitbot.convertRGB(0, 0, 0))
bitbot.ledRainbow()
bitbot.ledRotate()
basic.pause(100)
basic.forever(function () {
	
})
```