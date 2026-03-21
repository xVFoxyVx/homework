// #1

function calculateFinalPrice(price, discount, tax) {
    return price - (price * (discount / 100)) + tax;
}

console.log(calculateFinalPrice(1000, 10, 120));

// #2 

function checkAccess(name, password) {
    if (name === "admin" && password === "123456") {
        allowance = console.log("Доступ разрешен");
    } else {
        allowance = console.log("Доступ запрещен");
    }

    return allowance;
}

nameAllowance = prompt("Введите имя:");
passwordAllowance = prompt("Введите пароль:");

checkAccess(nameAllowance, passwordAllowance);

// #3

function getTimeOfDay(time) {
    if (time >= 0 && time <= 5) {
        period = console.log("Ночь");
    } else if (time >= 6 && time <= 11) {
        period = console.log("Утро");
    } else if (time >= 12 && time <= 17) {
        period = console.log("День");
    } else if (time >= 18 && time <= 23) {
        period = console.log("Вечер");
    } else {
        period = console.log("Некорректное время");
    }

    return period;
}

getTimeOfDay(12);

// #4

function findFirstEven (start, end) {
    for ( let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
            break;
        } else if (i == end) {
            console.log("Чётных чисел нет");
        } else {
            continue;
        }
    }
    return;
}

findFirstEven (1, 10);