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

let shouldGoToWork =`${key} && ${documents} && pen && apple || orange}` ;

console.log(shouldGoToWork);