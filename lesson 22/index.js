// #1

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
];

users.push({ name: 'Ann', age: 19, isAdmin: false });
users.push({ name: 'Jack', age: 43, isAdmin: true });

console.log(users);

// #2 

function getUserAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    return midAge = sum / users.length;
}

getUserAverageAge(users);

// #3

function getAllAdmins(users) {
    let usersAdmin = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true) {
            usersAdmin.push(users[i]);
        }
    }
    return usersAdmin;
}

getAllAdmins(users);

// #4

function first(arr, n) {
    if (n === undefined) {
        return arr.slice(0, 1);
    } else if (n === 0) {
        return [];
    } else {
        return arr.slice(0, n);
    }
}

first(users, 1);