input.onButtonPressed(Button.A, function () {
    // Send 0xDEAD
    radio.sendValue("A", 57005)
})
input.onButtonPressed(Button.B, function () {
    // Send 0xBEEF
    radio.sendValue("B", 48879)
})
radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        // Swaps bytes. Prints 0xDAED
        basic.showString("A " + ("" + smarttools.dec2Hex(value)))
    } else if (name == "B") {
        // Swaps bytes.  Prints 0xFEEB
        basic.showString("B " + ("" + smarttools.dec2Hex(value)))
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
