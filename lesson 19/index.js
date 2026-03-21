// #1

for (let i = 0; i <= 20; i++) {
    if ( i % 4 !== 0) {
        console.log(i);
    }
}

// #2

const number = prompt("Введите факториал:");
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
    console.log(factorial);
}

console.log(factorial);

// #3 

let board = "";
let row = "";
let bool = true;

for (let i = 1; i <= 8; i++) {
    row = "";
    for (let j = 1; j <= 8; j++) {
        if ((j + bool) % 2 == 0) {
            row += "Б ";
        } else {
            row += "Ч ";
        }
    }
    row += "\n";
    board += row;
    bool = ! bool;
}

console.log(board);
