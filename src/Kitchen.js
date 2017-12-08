import Microwave from "./Microwave"

console.log("Kitchen is running....")

class Kitchen {
    microwave = null

    constructor(microwave) {
        if(!microwave){
            throw Error
        }

        this.microwave = microwave
        Microwave.plugIn(this.microwave)
    }

    lightsStatus = "on"
    get areLightsOn() {
        return this.lightsStatus === "on"
    }
    set areLightsOn(areOn) {
        this.lightsStatus = areOn ? "on" : "off"
    }
}


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