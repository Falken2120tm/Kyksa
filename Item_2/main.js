/*=============== 1 ===============*/

const numOne = 3

alert(`${numOne}`)

/*=============== 2 ===============*/

const numA = 17
const numB = 10
let numC
const numD = 7

function numSubtraction() {
    return numC = numA - numB
}

function numSum() {
    numResult = numC + numD
    console.log(`Result: ${numResult}`)
}

numSubtraction()

numSum()

/*=============== 3 ===============*/

const greetingString = "Привіт, Світ!"

if(typeof greetingString === "string"){
    console.log(greetingString)
}

/*=============== 4 ===============*/

const myArray = [12,45,765,23,65,23]

console.log(`2: ${myArray[1]} 5: ${myArray[4]}`)

/*=============== 5 ===============*/

const arrOne = {
    'ua':['синій', 'червоний', 'зелений', 'блакитний'],
    'en':['blue', 'red', 'green', 'navy'],
};

for (let i = 0; i < arrOne.ua.length; i++) {
    console.log(`${arrOne.en[i]}: ${arrOne.ua[i]}`)
}
