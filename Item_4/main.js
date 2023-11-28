console.log("====================================================")

/*=============== 1 ===============*/

let numberRandom = Math.round(Math.random()* (999 - 1) + 1)

function numberExamination(number){
    console.log(number)
    if ((number % 2) == 0){
        console.log(true)
    } else if ((number % 2) == 1){
        console.log(false)
    }
}

numberExamination(numberRandom)

console.log("====================================================")

/*=============== 2 ===============*/

let arreyNumber = []
let numRandom = Math.round(Math.random()* (999 - 1) + 1)
console.log(numRandom)

function arreyFun(number){
    for (let i = 0; i < number; i++) {
        if((number % i) == 0){
            arreyNumber.push(i)
        }
    }
    return numRandom
}

arreyFun(numRandom)
console.log(arreyNumber)

console.log("====================================================")

/*=============== 3 ===============*/
 
let stringRave = "Agfd Itwf Wgsh Snfs Ejgt"
let arreyString = []

function stringArrey(string){
    arreyString = string.split(" ")
    arreyString.pop()
    return arreyString
}

stringArrey(stringRave)
console.log(arreyString)
