'use strict';

const str = "Test";
// const arr = [1, 2, 3];


// console.log(str[2]); // shous   s   because   s is number  2  in  word  "test" >>>>>>t=0,e=1,s=2,....


//console.log(str.toUpperCase()); // метод превращает строку все заглавные буквы

console.log(str.toLowerCase());// метод превращает строку все нижний регистр буквы


console.log(str);


const fruit = "Some fruit";

console.log(fruit.indexOf("q"));// поиск подстроки выводит -1 q ne  najden
  

// method  slice


const logg = "0123456789";

console.log(logg.slice(-6, -2));// result >>>>  4567


// method   substring 

const logg = "0123456789";

console.log(logg.substring(-2, 7));// result >>>>  0123456   ---->>  -2 === 0

// method   substr

const logg = "0123456789";

console.log(logg.substr(2, 4));// result >>>>  2345   второй аргумент говорит сколько символов вырезать надо













