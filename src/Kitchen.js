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
        //this.microwave.hasPower = true //plugging in
    }
}


const m3 = new Microwave(false, "M3")
m3.instanceCount = 100
console.log("M3 Count", m3.instanceCount)
console.log(Microwave.globalCount)

console.log(new Kitchen(new Microwave(false, "M1")))
console.log(new Kitchen(new Microwave(false, "M2")))

