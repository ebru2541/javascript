//? 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//? 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//?4 --> 0 (because 4 is already a one-digit number)
const persistence = (num) => {
  let multi = 1;
  num = num + "";
  while (num > 10) {
    for (let i in num) {
      console.log(num[i]);
      multi *= num[i];
      console.log(multi);
    }
    num = multi + "";
    multi = 1;
  }
  return num;
};

console.log(persistence(234));
console.log(persistence(999));
console.log(persistence(4));

//! 2 yol
const persistence1 = (num) => {
  let multi = 1;

  while (num > 10) {
    num = num + "";
    num.split("").forEach((item) => (multi *= item));
    num = multi;
    multi = 1;
  }
  return num;
};

//! 3.yol
function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  let multipli = 1;
  let splitStrng = num.toString().split("");
  for (let i = 0; i < splitStrng.length; i++) {
    multipli *= splitStrng[i];
  }
  return 1 + persistence(multipli);
}

//* Soru-1  1000 ile 2000 arasındaki 13 e bölümünden 3 kalan sayıları konsola yazdırınız ?
// let arr = [];
// for (let i = 1000; 2000 >= i; i++) {
//   if (i % 13 == 3) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// *Soru-2  Kullanıcıdan alınan 5 sayının ortalamasını konsola yazdırınız ?
// let toplam=0
// for(let i=0; i< 5; i++){
//     let num=+prompt("enter a number: ")
//     toplam+=num
// }
// console.log("ort:",(toplam / 5).toFixed(2));

// *Soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve konsola yazan kodu yazınız ?

// let toplam = 0;

// while (true) {
//   let num = +prompt("enter a number: ");
//   if (num > 0) {
//     toplam += num;
//   }
//   else{
//     break
//   }
// }
// console.log("toplam=", toplam)

//? Soru-4 Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz',5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?

// for (let i = 1; i < 100; i++) {
// if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   }
//   else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   }  else {
//     console.log(i);
//   }
// }

//? Soru-5 bir sayının(number) basamak sayısını yazdıran kodu yazınız ?
// let count=0
// function basamak(num){
//     for(i of num){
//       count+=1
//     }
//     return count
// }
// console.log(basamak("2345"));

// //? soru-6 Aşağıdaki çıktıyı konsola yazdırınız ?
// //? O
// //? OO
// //? OOO
// //? OOOO
// //? OOOOO
// //? OOOOOO
// //? OOOOOOO
// let res = "";
// for (let i = 0; i < 6; i++) {
//   for (let j = 1; j <= i; j++) {
//     res += "0";
//   }
//   res += "\n";
// }

// console.log(res);

//? soru-7 Aşağıdaki çıktıyı konsola yazdırınız ?
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// let result = ''
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     result += '* '
//   }
//   result += '\n'
// }
// console.log(result)

//? soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?
//    O
//   OOO
//  OOOOO
// OOOOOOO
// let str = "";
// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i + j >= 8) {
//       str += "O";
//     } else {
//       str += " ";
//     }
//   }
//   str += "\n";
// }
// console.log(str);

