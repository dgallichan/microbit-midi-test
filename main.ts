input.onButtonPressed(Button.A, function () {
    userMode = 1 - userMode
})
input.onButtonPressed(Button.B, function () {
    comment = "Attempting after touch - doesn't seem to work well yet!"
    instrument.note(myTone, music.beat(BeatFraction.Breve))
    for (let index = 0; index < 500; index++) {
        instrument.aftertouch(Math.map(input.rotation(Rotation.Pitch), -90, 90, 0, 127))
        basic.pause(10)
    }
})
let comment = ""
let userMode = 0
let instrument: midi.MidiController = null
let myTone = 0
basic.showIcon(IconNames.EighthNote)
midi.useRawSerial()
myTone = 69
let myVelocity = 127
instrument = midi.channel(1)
userMode = 0
comment = ""
basic.forever(function () {
    instrument.setVelocity(Math.map(input.rotation(Rotation.Pitch), -90, 90, 0, 127))
    myTone = Math.map(input.rotation(Rotation.Roll), -90, 90, 0, 127)
    if (userMode == 0) {
        comment = "Default mode - works well!"
        instrument.note(myTone, music.beat(BeatFraction.Eighth))
        basic.pause(100)
    }
})
