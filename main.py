def on_button_pressed_a():
    # Send 0xDEAD
    radio.send_value("A", 57005)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    # Send 0xBEEF
    radio.send_value("B", 48879)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if name == "A":
        # Swaps bytes. Prints 0xDAED
        basic.show_string("A " + ("" + smarttools.dec2_hex(value)))
    elif name == "B":
        # Swaps bytes.  Prints 0xFEEB
        basic.show_string("B " + ("" + smarttools.dec2_hex(value)))
    else:
        basic.clear_screen()
radio.on_received_value(on_received_value)

radio.set_group(1)