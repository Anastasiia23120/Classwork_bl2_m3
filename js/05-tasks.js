// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = rectSides[0] * rectSides[1];
// // const rectArea = Number(rectSides[0]) * Number(rectSides[1]);

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// console.log('numbers:', numbers);

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     total += num;
//   }
// }

// console.log('total:', total);

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// console.log('names:', names);
// console.log('phones:', phones);

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('namesArr:', namesArr);
// console.log('phonesArr:', phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? task 1
*/

// const string = 'Our office is closed so we`re working from home today.';

// const stringArr = string.split(' ');
// console.log(stringArr);

// stringArr.pop();
// stringArr.shift();
// console.log(stringArr);

/*
 * task 1(answer)
 */

// const string = 'Our office is closed so we`re working from home today.';

// const stringArr = string.split(' ');

// for (let i = 1; i < stringArr.length - 1; i++) {
//   console.log(stringArr[i]);
// }

/*
? task 2
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// console.log(min);

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }
// console.log(min);

/*
? task 3
*/
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// console.log(managerSalaries);
// console.log(developersSalaries);

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);
