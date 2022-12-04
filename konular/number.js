//? toString()
let num = 234;
console.log(num.toString(6));
console.log(typeof num);

let n = num.toString();
console.log(typeof n);

//? yuvarlama
//* Math.ceil()
console.log(Math.ceil(3.01));

//* Math.floor()
console.log(Math.floor(4.99));

//* Math.raund()
console.log(Math.round(5.1));

//* Math.trunc()
console.log(Math.trunc(5.9));

//? Math.abs()
console.log(Math.abs(3 - 7));

//? Math.max(), min()
console.log(Math.max(1, -6, -8));

const arr = [1, 2, 3, 4];
console.log(Math.max(...arr));

//? Math.pow()
console.log(Math.pow(4, 0.5));

//? Math.random()
//* 0-10
let veri = Math.floor(Math.random() * 10);
console.log(veri);
//* 0-100
let veri2 = Math.floor(Math.random() * 100);
console.log(veri2);
//* 1-100
let veri3 = Math.floor(Math.random() * 100 + 1);
console.log(veri3);

//? Math.sqrt() karekök alır
console.log(Math.sqrt(81));

//? toPrecision()
var say = 13.123456789;

console.log(say.toPrecision(3));

//? toFixed() virgülden sonra ekrana kaç basamak yazılacağını gösterir
console.log(say.toFixed(2));
