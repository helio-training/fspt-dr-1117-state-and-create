import Appliance from "./Appliance"

export default class extends Appliance {
    constructor(isPluggedIn){
        super(isPluggedIn)

    }

    willItBlend = (thing) => {
        if (thing === "bricks"){
            return true
        } else if (thing === "steel") {
            return false 
        } else {
            return true
        }
    }
}