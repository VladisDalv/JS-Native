/*
/!*
// Task 1

let bulMeaningTr ='true';
let bulMeaningFl = false;
let num = 17;
let meaning = undefined;
let meaningNothing = null;

console.log (typeof bulMeaningTr, typeof bulMeaningFl, typeof num, typeof meaning, typeof meaningNothing);

// Task 2

let height = 15
let width = 20

if (height > width) {
    console.log(height);
} else {
    console.log(width);
}

// Task 3

let numDef = 20;

for (let i = 0; i < numDef; i++){
    if( i % 2 !== 0){
    console.log(i);
    }
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && apple || orange;

console.log(shouldGoToWork);

// Task 5

 let numUser = prompt('Insert the number');

 if (numUser % 5 === 0 && numUser % 3 === 0) {
    alert('FizBuz')
} else if (numUser % 5 === 0) {
     alert('Fiz');
 } else if (numUser % 3 === 0) {
     alert('Buz')
 } else {
     alert('number doesnt fit')
 }


 // Task 6

let ageUser = prompt('Insert your age');

 if (ageUser > 18) {
     alert('Попей пивка');
 } else if (ageUser <= 18 && ageUser >= 16) {
     alert('Можешь выкурить сигаретку, только маме не говори');
 } else if (ageUser < 16) {
     alert(`Пей колу`);
 } else {
     alert('You entered an invalid value');
 }
*!/

 // Task 7

let sideWorld = prompt('enter the cardinal direction');

 switch (sideWorld) {
     case 'юг':
     case 'Юг':
         console.log('на юг пойдешь счастье найдешь');
         break;
     case 'север':
     case 'Север':
         console.log('на север пойдешь много денег найдешь');
         break;
     case 'запад':
     case 'Запад':
         console.log('на запад пойдешь верного друга найдешь');
         break;
     case 'восток':
     case 'Восток':
         console.log('на восток пойдешь разработчиком станешь');
         break;
     default:
         console.log('you entered wrong coordinates')
 }
*/

 // ADVANCED level

 // Task 1

let userName = 'пОлИнА нАбЕрЕжНаЯ';

 alert(`Hello ${userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()}`);

 // Task 2

let userNumber = prompt('Insert the number');

let unknown1 = prompt('how much to take away');

let unknown2 = prompt('how much to add');

let unknown3 = prompt('how much to multiply');

let unknown4 = prompt('how much to divide');

alert(`((((6 - 10) + 5) * 20) / 2 = 110)`)