// // Task 1
// const inputDate = '2025-12-31';

// const dateToArray = inputDate.split('-');

// const dateObject = new Date(dateToArray[0], 
//     dateToArray[1] - 1, dateToArray[2]);

// const day = dateObject.getDate();
// const month = dateObject.getMonth() + 1;
// const year = dateObject.getFullYear();

// const formatDate = day + '.' + month + '.' + year;

// console.log(formatDate);

// // Task 2
// link = 'http://amogus.com'
// otherLink = 'amogus.com'

// let checkUrl = (url) =>{
//     if (url.startsWith('http://')) {
//         return console.log(`Посилання ${url} починається з http://`)
//     }
//     else {
//         return console.log(`Посилання ${url} не починається з http://`)
//     }
// }
// checkUrl(link)
// checkUrl(otherLink)

// // Task 3

// let makeShort = (str, n) => {
//     if (str.length > n) {
//         return str.substring(0, n) + '...';
//     }
//     else {
//         return str;
//     }
// }

// let someText = 'Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated.';
// let num = 67;

// let shortText = makeShort(someText, num)
// console.log(shortText)

// // Task 4

// let camelToStand = (text) => {
//     return text.replace(/_./g, enter => enter.charAt(1).toUpperCase());
// }

// let randomCamelText = 'aaa_bbbb_cccc_dddd';
// console.log(camelToStand(randomCamelText))

// // Task 5
// let action = (x,y,n) => {
//     let result = x / y;
//     result = result.toFixed(n);
//     return result;
// };
// console.log(action(4, 3, 3));