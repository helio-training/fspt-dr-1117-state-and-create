console.log("microwave");

class Microwave {
    hasPower = null

    constructor(power) {
        console.log("Microwave ctor", power)

        this.hasPower = power
    }

    cook = (time, food) => {
        if (!this.hasPower){
            return "off"
        }

        if (time < 1) {
            switch (food) {
                case "taco":
                    return "hot"
                case "meatloaf":
                    return "cold"
            }
        } else if (time < 5) {
            switch (food) {
                case "taco":
                    return "very hot"
                case "meatloaf":
                    return "cold spots"
            }
        } else {
            switch (food) {
                case "taco":
                    return "burned"
                case "meatloaf":
                    return "perfect"
            }
        }
    }
}

const a = 1 //number
const b = "Hi" //string
const c = {
    hasPower: false,
    cook: (time, food) => {return "off"}
} //object
const d = [] //array
const e = new Microwave(false) //microwave

console.log("is c and e the same", c === e)

const myMicrowave = new Microwave(true)
myMicrowave.hasPower = false
console.log("my is plugged in?", myMicrowave.hasPower)
const foodCookLevel = myMicrowave.cook(.5, "taco")
console.log(foodCookLevel)

const otherMicrowave = new Microwave(false)
otherMicrowave.hasPower = true
console.log("other is plugged in?", otherMicrowave.hasPower)
console.log(otherMicrowave.cook(10, "meatloaf"))