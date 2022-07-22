function oldSchoolAdd() {
    // Function body
    return 2 + 3
}

const esNextAdd = () => {
    // Function body
    return 2 + 3
}

/**
 * 
 * @param {number} operande1 
 * @param {number} operande2 
 * @returns Sum of operande1 and operande2 or NaN if not defined
 */
const addition = (operande1, operande2) => {
    return operande1 + operande2
}

/**
 * 
 * @param {number} operande1 
 * @param {number} operande2 
 * @returns Multiplication operande1 and operande2 or NaN if not defined
 */
 const multiplication = (operande1, operande2) => {
    return operande1 * operande2
}

const doubleOfSum = (operande1, operande2) => {
    return multiplication(addition(operande1, operande2), 2)
}

// Call a function
const resultOldSchool = oldSchoolAdd()
const resultEsNext = esNextAdd()

console.log(`And the result is : ${resultEsNext} ${resultOldSchool}`)

console.log(`Addition vaut : ${addition(2, 3)}`)

let value = 3
const result = addition(value, 2)
console.log(`With variable result is ${result}`)
console.log(`Value vaut : ${value}`)

const double = multiplication(addition(3, 2), 2)