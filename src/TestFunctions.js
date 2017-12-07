const parentFunc = () => {
    const argProp = {
        someNumber: 42
    }
    console.log("parentFunc before", argProp.someNumber)
    childFunc(argProp)
    console.log("parentFunc after", argProp.someNumber)    

    console.log("parentFunc before", argProp.someNumber)
    childNumberFunc(argProp.someNumber)
    console.log("parentFunc after", argProp.someNumber)    
}

const childFunc = (prop) => {
    console.log("childFunc unmodified", prop.someNumber)
    prop.someNumber = 73
    console.log("childFunc modified", prop.someNumber)
}

const childNumberFunc = (someNumber) => {
    console.log("childNumberFunc unmodified", someNumber)
    someNumber = 100
    console.log("childNumberFunc modified", someNumber)
}

parentFunc()

const employees = [
    {
        name: "Danny Warren",
        salary: 10000000,
        payPeriod: "day",
        tenureInYears: 10
    },
    {
        name: "Tim",
        salary: 100.50,
        payPeriod: "day",
        tenureInYears: 0
    },
    {
        name: "Andy",
        salary: 25.50,
        payPeriod: "month",
        tenureInYears: 0
    }
]

console.log("employees", employees)
console.log("employee index 3", employees[3])

const processPayroll = (employee) => {
    console.log("if", employee)
    if (employee.payPeriod === "month") {
        return employee.salary * 12
    } else if (employee.payPeriod === "week") {
        return employee.salary * 52
    } else if (employee.payPeriod === "day" && employee.tenureInYears < 10) {
        return employee.salary * 365
    }
    return employee.salary
}

const processPayrollSwitch = (employee) => {
    console.log("switch", employee)
    switch(employee.payPeriod) {
        case "month":
            return employee.salary * 12
        case "week":
            return employee.salary * 52
        case "daily":
        case "day": 
            return employee.tenureInYears < 10 
                        ? employee.salary * 365 
                        : employee.salary * 365 * 10
        default:
            return employee.salary
    }
}

// for (const i in employees) {
//     console.log(i % 2 === 0 ? "" : "Other")
//     const yearlySalary = processPayroll(employees[i])
//     console.log(employees[i].name, yearlySalary)
// }

for (const employee of employees) {
    const yearlySalary = processPayroll(employee)
    console.log(employee.name, yearlySalary)
}

// let i = 0
// console.log("While starts after this: ", i)
// while (i < employees.length) {
//     const yearlySalary = processPayroll(employees[i])
//     console.log("while i is " + i, employees[i].name, yearlySalary)
//     i++    
// }

