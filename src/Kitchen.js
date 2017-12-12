import Microwave from "./Microwave"
import Appliance from "./Appliance"
import Blender from "./Blender"

console.log("Kitchen is running....")

class Kitchen {
    microwave = null
    blender = null

    constructor(microwave, blender) {
        if(!microwave){
            throw Error
        }

        this.microwave = microwave
        this.blender = blender

        Appliance.plugIn(this.microwave)
    }

    lightsStatus = "on"
    get areLightsOn() {
        return this.lightsStatus === "on"
    }
    set areLightsOn(areOn) {
        this.lightsStatus = areOn ? "on" : "off"
    }
}

console.log("Target Kitchen")
const kitchen2 = new Kitchen(new Microwave(false, "M5"), new Blender(false))
console.log("Will Bricks Blend?", kitchen2.blender.willItBlend("bricks"))


export const m3 = new Microwave(false, "M3")
m3.instanceCount = 100
console.log("M3 Count", m3.instanceCount)
console.log(Microwave.globalCount)

console.log(new Kitchen(new Microwave(false, "M1")))
console.log(new Kitchen(new Microwave(false, "M2")))

const microwave = new Microwave(false)
const kitchen = new Kitchen(microwave)

console.log("Our Kitchen lights", kitchen.areLightsOn)
kitchen.areLightsOn = false
console.log("Our Kitchen lights", kitchen.areLightsOn)