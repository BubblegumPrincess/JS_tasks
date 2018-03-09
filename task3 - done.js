/*
Вопрос 3
Напишите функцию sum, вызываемую следующим образом:
sum(1)(2)(3)....(n)(); // 1 + 2 + 3 + ... + n
sum(1)(10)(); // 11
sum(1)(); // 1
*/

function sum(a){
  var result = a;
  function add_then_repeat(b){
    if(b){
      result += b;
      return add_then_repeat;
    } else {
      return result;
    };
  };
  add_then_repeat.toString = function(){
      return result;
    };
    return add_then_repeat;
  };


  /*
  you need to open the console and write
  console.log(sum(firstNumber)(secondNumber)(thirdNumber)(andSoOn))
  and press enter
  and you get as the result - sum of numbers, that were in brackets
  */