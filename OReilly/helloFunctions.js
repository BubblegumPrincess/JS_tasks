function whatShallIwear (temp) {
    if(temp < 15) {
        console.log("Wear a jacket");
    } else if (temp < 20) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

whatShallIwear(10); //Wear a jacket
whatShallIwear(22); //Wear a t-shirt
whatShallIwear(15); //Wear a sweater

function bake(degrees) {
    var message;

    if (degrees > 280) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 140) {
        message = "i'm not a regrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
    }
    return message;
}

var status = bake (350);
console.log(status);

function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3);  //Brewing 3 cups of undefined
makeTea(3, "Earl Grey", "hey there!", 42); //last two will be ignored

function calculateArea (r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);

/*
пошаговое объяснение как работает кусок - от function calculateArea до этого коммента:
1. программа объявляет переменную radius и инициализируем её значением 5.2;
2. программа вызывает функцию calculateArea и передаёт ей переменную radius как аргумент;
3. аргумент присваивается параметру r, программа запускает выполнение функции с параметром r, содержащим значение 5.2;
4. тело функции начинает выполняться с объявления переменной area. Затем проверяет условие при котором, значение параметра r меньше либо равно нулю;
    5. Тогда бы программа вернула ноль и закончила выполнение. У нас же - параметру r передаётся значение 5.2, так что эта строка не выполняется;
6. вместо этого, выполняется блок else;
7. программа вычисляет площадь круга, используя значение 5.2 параметра r. Вычисленное значение сохраняется в переменной area;
8. функция возвращает вычисленное значение и завершает выполнение;
9. значение возвращаемое функцией, сохраняется в переменной theArea;
10. вывод на консоль.
*/

var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar (points) {
    var level = points / pointsPerLevel;

    if (level == 0) {
        return "Teddy Bear";
    } else if (level == 1) {
        return "Cat";
    } else if (level >= 2) {
        return "Gorilla";
    }
}

function updatePoints (bonus, newPoints) {
    for (var i =0; i < bonus; i++) {
        newPoints = newPoints + skill * bonus;
    }
    return newPoints + userPoints;
}

userPoints = updatePoints(2, 100); //2112
avatar = getAvatar(2112); //Gorilla
console.log(userPoints);
console.log(avatar);

function clunk (times) {
    for (var num = times; num > 0; num--){
        display("clunk");
    }
}

function thingamajig (size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display ("clank");
    } else if (size == 1) {
        display ("thunk");
    } else {
        for (; size > 1; size--) {
            facky = facky * size;
        }
        clunk(facky);
    }
}

function display (output) {
    console.log(output);
    clunkCounter++;
}

var clunkCounter = 0;
thingamajig(5);
//thingamajig(1)  // 1
//thingamajig(2)  // 2
//thingamajig(3)  // 6
//thingamajig(4)  // 24
//thingamajig(5)  // 120
//thingamajig(6)  // 720
console.log(clunkCounter);

var balance = 10500;
var cameraOn = true;

function steal (amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    cameraOn = true;
    return balance;
}

var amount = steal(1250);
console.log ("Criminal: there's only " + balance + " money on count left!"); //9250