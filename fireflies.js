basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("hey")
        led.setBrightness(255)
        led.plotAll()
led.fadeOut(500)
    }
    if (radio.receiveString() == "hey") {
        led.setBrightness(255)
        led.plotAll()
led.fadeOut(500)
    }
})
