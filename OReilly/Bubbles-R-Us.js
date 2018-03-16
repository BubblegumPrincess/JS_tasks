
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

/* задача - вывод результатов по всем данным из scores[]
var elem = 0;
var result;

while ( elem < scores.length) {
    result = "Bubble solution #" + elem + " score: " + scores[elem];
    console.log(result);
    elem = elem + 1;
}
*/

// теперь то же самое, только короче (и красивше)

/*
var result;

for (var i = 0; i < scores.length; i++) {
    result = "Bubble solution #" + i + " score: " + scores[i];
    console.log(result);
}
*/

// задача - найти результат с максимальным значением
var highScore = 0;
var result;
 for (var i =0; i < scores.length; i++) { //методом перебора щупаем каждый элемент массива
     result = "Bubble solution #" + i + " score: " + scores[i];
     console.log(result);
     if (scores[i] > highScore) {  //если он больше того, с чем сравниваем
         highScore = scores[i];  //он присваивается переменной, с которой сравниваем
     }
 }

 //аналогия - если ты перебираешь коробку карандашей, нашёл "самый лучший на данный момент"
 //этот карандаш становится "новым эталоном сравнения"
 //пока не появится вариант получше