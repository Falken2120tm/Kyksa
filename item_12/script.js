// // Task 1
// let enterNums = (num) => {
//     for (let i = 1; i<=num; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('кратно 3 и 5')
//         }
//         else if(i % 5 === 0) {
//             console.log('кратно 5')
//         }
//         else if(i % 3 === 0) {
//             console.log('кратно 3')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }

// enterNums(15)

// // Task 2
// let initial = (fullName) => {
//     nameArray = fullName.split(' ');
//     personName = nameArray[1].charAt(0) + '.';
//     personSurname = nameArray[0];
//     personFather = nameArray[2].charAt(0) + '.';
//     return personName + personFather +' '+ personSurname;
// }

// randomName = 'Дерден Тайлер Борисович'
// console.log(initial(randomName))

// // Task 3
// function sumFunc() {
//     let attempts = 3;

//     while (attempts > 0) {
//         let userInput = prompt('Введіть число:');

//         if (userInput === null) {
//             console.log('Введення відмінено.');
//             return;
//         }

//         let userNumber = parseFloat(userInput);

//         if (!isNaN(userNumber) && userNumber >= 0 && Number.isInteger(userNumber)) {
//             let sum = 0;
//             for (let i = 1; i <= userNumber; i++) {
//                 sum += i;
//             }

//             console.log('Сума натуральних чисел, що не перевищують введене число:', sum);
//             return;
//         } else {
//             console.log('Введено некоректне число. Залишилося спроб: ' + (--attempts));
//         }
//     }

//     console.log('Число не введено після трьох спроб.');
// }

// sumFunc()

// // Task 4
// function counter(sentence) {
//     const letter = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];

//     const lowerCaseSentence = sentence.toLowerCase();

//     let count = 0;

//     for (let char of lowerCaseSentence) {
//         if (letter.includes(char)) {
//             count++;
//         }
//     };
//     return count;
// }

// const randSentence = 'Я звичайне речення!';
// console.log(counter(randSentence));

// // Task 5
// function mostVowelWord(sentence) {
//     const vowels = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];

//     const countVowels = (word) => {
//         let vowelCount = 0;
//         for (let char of word.toLowerCase()) {
//             if (vowels.includes(char)) {
//                 vowelCount++;
//             }
//         }
//         return vowelCount;
//     };

//     const words = sentence.split(' ');

//     let counter = 0;
//     let maxVowels = '';

//     for (let word of words) {
//         const currentVowelCount = countVowels(word);
//         if (currentVowelCount > counter) {
//             counter = currentVowelCount;
//             maxVowels = word;
//         }
//     }

//     return maxVowels;
// }

// const randSentence = 'Я просто якійсь текст, який заслуговує на увагу!';
// console.log('Слово з найбільшою кількістю голосних літер:', mostVowelWord(randSentence));