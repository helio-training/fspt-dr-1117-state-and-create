class Appliance {
    hasPower = false

    constructor(isPluggedIn){
        this.hasPower = isPluggedIn
    }

    static plugIn = (appliance) => {
        appliance.hasPower = true
    }

    static unplug = (appliance) => {
        appliance.hasPower = false
    }
}

export default Appliance