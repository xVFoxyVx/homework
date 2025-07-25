const name = ['Foxy', 'Anna', 'Jonh']

function helloName(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Hello ${array[i]}`)
    }
}

console.log(helloName(name))

///////////////////////////////////////////////////

function hiName(name) {
    return console.log(`Hello ${name}`)
}

console.log(hiName('Foxy'))

///////////////////////////////////////////////////

const num = [1, 11, 5, 10, 15]

function comparNum (array) {
    for (let i = 0; i < array.length; i++) {
        if  (array[i] > 10) {
            console.log (array[i])
        }
    }
}

console.log (comparNum(num))

///////////////////////////////////////////////////

function minCalculator(num1, num2, sign) {
    let num;
    
    if (sign == 'multiply') {
        num = num1 * num2;
    }
    else if (sign == 'division') {
        num = num1 / num2;
    }
    else if (sign == 'plus') {
        num = num1 + num2;
    }
    else if (sign == 'minus') {
        num = num1 - num2;
    }
    
    return num;
}

console.log(minCalculator(10, 2, 'multiply')); 

///////////////////////////////////////////////////

const iAm = {
    name: 'Timur',
    age: 18,
    country: 'Russia',
    helloName (name) {
        console.log(`Hello ${name}`)
    }
}

console.log(iAm)
iAm.helloName('Timur')

///////////////////////////////////////////////////

const users = [
    {
        name: 'Timur',
        age: 18,
        isAdmin: true
    },
    {
        name: 'Anna',
        age: 16,
        isAdmin: false
    },
    {
        name: 'Stas',
        age: 19,
        isAdmin: true
    },
    {
        name: 'Jo',
        age: 14,
        isAdmin: false
    },
    {
        name: 'AntiMage',
        age: 21,
        isAdmin: true
    }
]

let flag = 0 

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin != true) {
        flag++
    }
}

console.log(flag)