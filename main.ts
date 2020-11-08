/**
 * This code reveals a bug in the way that MakeCode sends numbers over the radio.
 * 
 * When we send an integer via the radio, it arrives with the bytes swapped.  E.g. 0xDEAD arrives as 0xDAED.
 * 
 * The micro:bit's Nordic nRF51822 is a little-endian CPU, so it stores 0xDEAD as 0xDAED.
 * 
 * One of two things is happening:
 * 
 * 1. The micro:bit sends in host order, converts from network order to host order on arrival: 0xDEAD.  Prints 0xDAED.
 * 
 * 2. The micro:bit sends in network order, leaves unchanged on arrival: 0xDEAD. Prints 0xDAED.
 */
input.onButtonPressed(Button.A, function () {
    // Send 0xDEAD.
    radio.sendValue("A", 57005)
})
input.onButtonPressed(Button.B, function () {
    // Send 0xBEEF
    radio.sendValue("B", 48879)
})
radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        // Prints 0xDAED
        basic.showString("A " + ("" + smarttools.dec2Hex(value)))
    } else if (name == "B") {
        // Prints 0xFEEB
        basic.showString("B " + ("" + smarttools.dec2Hex(value)))
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
