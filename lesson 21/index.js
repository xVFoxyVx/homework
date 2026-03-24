// #1

const person = {
    name: "Timur",
    age: "19",
    man: true,
    dota2Time: 1709,
}

console.log(person);

// #2

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

console.log(isEmpty(person));

// #3 

const task = {
    title: "Задача на день",
    description: "Апнуть титана",
    isCompleted: false,
}

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
}

const newTask = cloneAndModify(task, {
    dopDescription: "Не слиться до рекрута",
});

for (let key in newTask) {
    console.log(`${key}: ${newTask[key]}`);
}


// #4 

const player = {
    game: "CS2",
    hours: "322",
    method1() {
        console.log("Он про?");
    },
    method2() {
        console.log("Или нет?");
    },
    property: "Точно нет",
}

function callAllMethods(object) {
    for (let key in object) {
        if (typeof object[key] === 'function') {
            object[key]();
        }
    }
}

    callAllMethods(player);