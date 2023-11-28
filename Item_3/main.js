/*=============== 1 ===============*/

let langCountry
let arrMy

langCountry = Math.round(Math.random())

if(langCountry == 0){
    langCountry = "ua"
} else if (langCountry == 1){
    langCountry = "en"
} else {
    console.log("Ошибка")
}

console.log(langCountry)

switch(langCountry){
    case "ua":
        arrMy = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]
        break
    case "en":
        arrMy = ["Mn", "Td", "Wn", "Ts", "Fd", "Sr", "Sn"]
        break
}

for (let i = 0; i < arrMy.length; i++) {
    console.log(arrMy[i])
}

console.log("====================================================")

/*=============== 2 ===============*/

let aNumber = 1
const oneArrey = [1, 0, -3]

aNumber = oneArrey[Math.floor(Math.random()*oneArrey.length)]

console.log(aNumber)

if(aNumber >= 0){
    console.log("Вірно")
} else if(aNumber < 0) {
    console.log("Неправильно")
} else {
    console.log("Ошибка")
}

console.log("====================================================")

/*=============== 3 ===============*/

//1 3   0 6  3 5
const aArrey = [
    aObject = {aElement:1,bElement:3,},
    bObject = {aElement:0,bElement:6,},
    cObject = {aElement:3,bElement:5,} ]

obElement = aArrey[Math.floor(Math.random()*aArrey.length)]

let aNum = obElement.aElement
let bNum = obElement.bElement

if(aNum <= 1 && bNum >= 3){
    sumNum = aNum + bNum
    console.log(`Сума чисел а і б: ${sumNum}`)
} else {
    if(aNum > bNum){
        subtractionNum = aNum - bNum
        console.log(`а більше б на ${subtractionNum}`)
    } else if(aNum < bNum){
        subtractionNum = bNum - aNum
        console.log(`б більше а на ${subtractionNum}`)
    } else if(aNum == bNum) {
        console.log("а і б рівні")
    } else {
        console.log("Error1")
    }
}

console.log("====================================================")

/*=============== 4 ===============*/

monthNum = Math.round(Math.random()* (12 - 1) + 1)

switch(monthNum){
    case 12:
    case 1:
    case 2:
        console.log(`Місяць "${monthNum}" це Зима`)
        break
    case 3:
    case 4:
    case 5:
        console.log(`Місяць "${monthNum}" це Літо`)
        break
    case 6:
    case 7:
    case 8:
        console.log(`Місяць "${monthNum}" це Весна`)
        break
    case 9:
    case 10:
    case 11:
        console.log(`Місяць "${monthNum}" це Осінь`)
        break
}

console.log("====================================================")

/*=============== 5 ===============*/

let NumberA = Math.round(Math.random()* (200 - 1) + 1)
let NumberB = Math.round(Math.random()* (100 - 1) + 1)

console.log(`A:${NumberA}   B:${NumberB}`)

let NumberPercent = Math.floor(NumberA / NumberB)

if(NumberPercent == 0){
    console.log("Ділиться")
} else if(typeof NumberPercent == "number" && NumberPercent > 0){
    console.log(`Ділиться з залишком: ${NumberPercent}`)
} else {
    console.log("Error1")
}

console.log("====================================================")

/*=============== 6 ===============*/

let resultOne = 0
const arreyLength = [1, 2, 3, 4, 5]

for (let i = 0; i < arreyLength.length; i++) {
    resultOne += arreyLength[i]
}

console.log(`Результат: ${resultOne}`)

console.log("====================================================")

/*=============== 7 ===============*/

for (let randomNum = 1; randomNum < 101; randomNum++) {
    let shareNum = randomNum % 12

    if(shareNum == 0){
        console.log(`Ділиться без залишку: ${randomNum}`)
    }
}

console.log("====================================================")

/*=============== 8 ===============*/

const arreyBig = [1, 43, 64, 256, 867, 23, 65, 87, 45, 264, 864, 2468, 97, 45, 327, 74, 16, 10, 2, 37] 
let arreyOne = []
let arreyTwo = []

for (let i = 0; i < arreyBig.length; i++) {
    if((arreyBig[i] % 2) == 1){
        arreyOne.push(arreyBig[i])
    } else if((arreyBig[i] % 1) == 0){
        arreyTwo.push(arreyBig[i])
    }
}

console.log(arreyOne)
console.log(arreyTwo)

console.log("====================================================")

/*=============== 9 ===============*/

//Дано масив із позитивних та негативних чисел. Вивести в консоль суму всіх парних позитивних чисел та їх кількість.

const arreyNumber = [-12, 345, 56, 45, 673, 123, -34, 562, -762, 76564, 65453, 1, 341, -547, 2333333, -9454]
let numberSum = 0
let numberLength = 0

for (let i = 0; i < arreyNumber.length; i++) {
    if(arreyNumber[i] > 0){
        if((arreyNumber[i] % 2) == 0){
            numberSum += arreyNumber[i]
            numberLength ++
        }
    }
    
}

console.log(`Кількість чисел: ${numberLength}`)
console.log(`Сума чисел: ${numberSum}`)
