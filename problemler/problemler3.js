//?Girilen bir pozitif sayının 0 a kadar olan sayıların toplamını kendini yenileyen fonksiyon ile ifadesi

// let n = Number(
//   prompt(
//     " girdiğiniz pozitif sayıdan 0 a kadar olan sayıların toplamını bulmak için bir sayı giriniz"
//   )
// );

// const toplama = (n) => {
//   if (n == 0) return 0;
//   else return n + toplama(n - 1);
// };

// let sonuc = toplama(n);
// console.log(sonuc);

//? 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
//? console.log(calFahrenheit(30)) // output: 86

//? 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
//? console.log(reverseString('hello world')) // output: dlrow olleh
// function reverseString(text) {
//   text = text.split("").reverse().join("");
//   return text;
// }
// console.log(reverseString("hello world"));

//? 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?(Büyük , küçük harf duyarlılığı olmamalıdır.)
// ?const string = 'selles'
//? console.log(isPalindrome(string)) // output: true
// function isPalindrome(x) {
//    return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
// }
// console.log(isPalindrome("string"));

//? 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
//? console.log(findVowels('hello world')) // output: eoo
// const findVowels = (str) => {
//   const vowels = "aeıioöuü";
//   let newVowels = "";

//   for (let i = 0; vowels.length > i; i++)
//     if (vowels.includes(str[i])) {
//       newVowels += str[i];
//     }

//   return newVowels;
// };
// console.log(findVowels("hello world"));

//? 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
//? console.log(sumOfDivisors(12)) // output: 28
// let sum = 0;
// let arr = [];

// function sumOfDivisors(number) {
//   for (let i = 1; number >= i; i++) {
//     if (number % i == 0) {
//       sum += i;
//       arr.push(i);
//     }
//   }
//   return [arr, sum];
// }

// console.log(sumOfDivisors(12));

//? 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
//? console.log(isPrime(7)) // output: true

// function isPrime(number) {
//   let top = 0;
//   for (let i = 2; number > i; i++) {
//     if (number % i == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }

// }

// function isPrime(number) {
//   for (let i = 2; number > i; i++) {
//     return number % i == 0 ? false : true;
//   }
// }
// console.log(isPrime(12));
// console.log(isPrime(7));

//? 8- tersten yazma
//? reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
//? reverse("Happy") ➞ yppaH

function reverseText(text) {
  return text.split("").reverse().join("");
}
console.log(reverseText("Happy"));
console.log(reverseText("Clarusway Rocks!"));

//* ya da

function reverseText1(metin) {
  let newReverse = "";
  for (let i = metin.length - 1; i >= 0; i--) {
    newReverse += metin[i];
  }
  return newReverse;
}
console.log(reverseText1("Clarusway Rocks!"));

//? 9- Input : 'Clarusway' => Output : 'Clarusway'
//?Input : 'days. big make things Little' => Output : 'Little things make big days.'

const reverseWords = (word) => {
  let words = word.split(" ");
  if (words.length >= 2) {
    return words.reverse().join(" ");
  } else {
    return word
  }
};
console.log(reverseWords("Clarusway"));
console.log(reverseWords("days. big make things Little"));