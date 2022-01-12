"use strict";

let num = 50;

// 1 способ
while (num < 55) {
  console.log(num);
  num++;
}   

// 2 способ
do {
  console.log(num);
  num++;
}   
while (num < 55);

// 3 способ
for (let i = 1; i<8; i++) {
  console.log(i)
}  

//плюс условие, + закончить досрочно
for (let i = 1; i<10; i++) {
  if (i===6) {
    break;    // закончит досрочно на шаге 6
 // continue; // пропустит в цикле шаг 6 из-за условия i===6
  }
  console.log(i);
} 
