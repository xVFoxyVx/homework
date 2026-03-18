// #1
let number = 52;

if (number % 2 == 0) {
    console.log(number, "четное число");
} else {
    console.log(number, "нечетное число");
}

// #2
let age = 18;
let discount = age < 18 ? "10%" : (age >= 18 && age <= 65 ? "20%" : (age > 65 ? "30%" : "30%"));

console.log(discount, "процентов скидки");

switch (true) {
    case age < 18:
        discount = "10%";
        console.log(discount);
        break;
    case age >= 18 && age <= 65:
        discount = "20%";
        console.log(discount);
        break;
    case age > 65:
        discount = "30%";
        console.log(discount);
        break;
}

// #3
let username = prompt("Введите имя:");
let password = prompt("Введите пароль:");

if (username === "admin" && password === "123456" || username === "user" && password === "123456") {
    alert("Доступ разрешен");
} else {
    alert("Доступ запрещен");
}

// #4
let price = 0;
let coefficient = 0;

while (true) {
    let weight = prompt("Введите вес посылки (в килограммах):");

    if (weight > 0 && weight < 1) {
        price = 5;
    }
    else if (weight >= 1 && weight <= 5) {
        price = 10;
    }
    else if (weight > 5) {
        price = 15;
    }
    else {
        alert("Некорректный вес посылки. Попробуйте снова.");
        continue;
    } 
    break;
}

while (true) {
    tip = prompt("Введите тип доставки (Стандарт, Экспресс, Премиум):");
    
    switch (tip) {
        case "Стандарт":
            coefficient = 1;
            break;
        case "Экспресс":
            coefficient = 1.5;
            break;
        case "Премиум":
            coefficient = 2;
            break;
        default:
            alert("Неверный тип доставки. Попробуйте снова.");
            continue;
    }
    break;
}

const finalPrice = price * coefficient;
alert(`Итоговая стоимость доставки: ${finalPrice} $`); 
