// Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x+y+z);

// Task 2

let secMin = 60;
let minHour = 60;
let hourDay = 24;
let dayYear = 365;

let myAgeInSeconds = (dayYear * 24 * hourDay * minHour * secMin);

console.log(myAgeInSeconds);

// Task 3

let count = 42;
let userName = '42';

let countTextQuotes = `${count}`;
let countTextType = count.toString();

console.log(countTextQuotes);
console.log(countTextType);

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

let sum = `${a}` + `${b} ` + c;

console.log(sum);

// Task 5

let item1 = 'доступ';
let item2 = 'морпех';
let item3 = 'наледь';
let item4 = 'попрек';
let item5 = 'рубило';

let sum1 = (item1 + item2 + item3 + item4 + item5).length;

console.log(sum1);

// Task 6

let typeStr = 'hello';
let typeNum = 41;
let typeNull = null;

console.log(`Variable: typeStr have type: ${typeof typeStr}`);
console.log(`Variable: typeNum have type: ${typeof typeNum}`);
console.log(`Variable: typeNull have type: ${typeof typeNull}`);

// Task 7

console.log(prompt('Name'), prompt('Age'));

// ADVANCED level

// Task 1

let aAdv = 4;
let bAdv = 3;

aAdv = bAdv + aAdv;
bAdv = aAdv - bAdv;
aAdv = aAdv - bAdv;

console.log(aAdv);
console.log(bAdv);

// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(`${codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]}`);