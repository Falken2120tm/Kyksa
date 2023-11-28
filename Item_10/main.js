/*=============== 1 ===============*/

let arrayNumber = [2, 3, 4, 5, 6, 4, 77, 32, 4]

let bigEnough = (elem) => elem > 15;
let arrayFive = arrayNumber.filter(bigEnough)

function arrayLog(array){
    for (let i = 0; i < array.length; i++) {
        document.write([i] + ' - ' + array[i] + '</br>')
    }
}

arrayLog(arrayFive)

console.log("====================================================")

/*=============== 2 ===============*/

const valuesArray = [1, 100, 5, 6, 13, 13, 22, 5];
const duplicates = valuesArray.filter((number, index, numbers) => {
return numbers.indexOf(number) !== index;
});

console.log(duplicates);

console.log("====================================================")

/*=============== 3 ===============*/

let arrayOne = []
let arrayTwo = []
let arrayLength = 10

function arrayRandom(array, Length){
    for (let i = 0; i < Length; i++) {
        numberRandom = Math.floor(Math.random() * (999 - 1) + 1)
        array[i] = numberRandom
    }

    return array
}

arrayRandom(arrayOne, arrayLength)
arrayRandom(arrayTwo, arrayLength)

console.log(arrayOne)
console.log(arrayTwo)

function arrayComparison(arrayA, arrayB){
    if(arrayA.length !== arrayB.length){
        return false
    }

    for (let i = 0; i < arrayA.length; i++) {
        if(arrayA[i] !== arrayB[i]){
            return false
        }
    }
    return true
}

let arrayRave = arrayOne

console.log(arrayComparison(arrayOne, arrayTwo))
console.log(arrayComparison(arrayOne, arrayRave))

console.log("====================================================")

/*=============== 4 ===============*/

let arrayUser = [];
let sumUser = 0;

function sumInput(array){
    for (let i = 0; i < array.length; i++) {
        sumUser += parseInt(array[i]);
    }

    return sumUser;
};

function promptInput(){
    for (let i = true; i = true; i) {
        numberTrue = prompt(`Введіть число:`);

        if(isNaN(numberTrue)){
            return;
        } else {
            arrayUser.push(numberTrue);
        }
    }

    return arrayUser;
};

promptInput();
sumInput(arrayUser);

console.log(arrayUser);
console.log(sumUser);
