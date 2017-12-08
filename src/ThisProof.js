export default class {
    constructor(){
        console.log("ThisProof ctor", this)
    }

    //arrow function
    doThis = () => {
        console.log("doThis", this)
    }

    //function keyword function
    doThisToo() {
        console.log("doThisToo", this)
    }
}

export const doWork = () => { console.log("doWork", this) }

function doWork2() { console.log("doWork2", this) }

//doWork2 = doWork2.bind(this)

export { doWork2 }