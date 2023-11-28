/*=============== 1 ===============*/

let arrayRave = []

for (let i = 0; i < 10; i++) {
    arrayRave[i] = Math.round(Math.random()* (999 - 1) + 1)
}

console.log(arrayRave)

console.log("====================================================")

/*=============== 2 ===============*/

let secondsParty = 1719608400000 - Date.now()
let dayParty = Math.floor(secondsParty / 86400000)

console.log(`Днів: ${dayParty}`)

console.log("====================================================")

/*=============== 3 ===============*/

semesterNumber = Math.round(Math.random()* (8 - 1) + 1)
console.log(semesterNumber)

function semesterNow(semester){
    semesterParty = (semester % 2) + 1
    return semesterParty
}

semesterNow(semesterNumber)

console.log(semesterParty)

console.log("====================================================")

/*=============== 4 ===============*/
let numberfraction = 4.872378238923	
let numberLength = 4


function roundingNumber(number, length){
    roundingNum = number.toFixed(length)
    return roundingNum
}

roundingNumber(numberfraction, numberLength)

console.log(roundingNum)
