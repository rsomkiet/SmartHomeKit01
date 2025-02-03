let noise = 0
let light2 = 0
led.enable(false)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (light2 < 50) {
        noise = smarthome.ReadNoise(AnalogPin.P2)
        if (noise > 70) {
            neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(10000)
            neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
