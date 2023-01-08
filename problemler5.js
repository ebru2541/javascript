//? 1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir JavaScript fonksiyonu yazın.
// Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"

// function protect_email(email){
//  return email.search("@")
// }

// console.log(protect_email("robin_singh@example.com"));

//? 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3

// let toplam = 0;
// function average(arr) {
//   arr.map((item) => (toplam = +item));
//   return toplam / arr.length;
// }
// console.log(average([1, 2, 3, 4, 5]));

//? 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
//? Examples:
//? Input: 42145 Output: 54421
//? Input: 145263 Output: 654321
//? Input: 123456789 Output: 987654321

// function sirala(sayi){
//     sayi=sayi+""
//     return sayi.split("").sort().join("")
// }
// console.log(sirala(544123));

//? 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.

//? Examples:
//? Input: "day" Output: "dy"
//? Input: "apple" Output: "ppl"
//? Input: "javascript" Output: "jvscrpt"

// function sessiz(text) {
//   let str = "";
//   let sesli = "aeıioöuü";
//   for (let i of text) {
//     console.log(i);
//     if (sesli.search(i)) {
//       str += i;
//     }
//   }
//   return str;
// }

//* 2.yol

let sesli = "aeıioöuü";

function sessiz(text) {
  return [
    text
      .split("")
      .filter((item) => !sesli.includes(item))
      .join(""),
  ];
}

console.log(sessiz("day"));
console.log(sessiz("javascript"));

// 5- Bir JavaScript dizisinde tekrar eden  değerleri bulan bir JavaScript programı yazın.

// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9

// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.

// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function kareAl(arr) {
  return arr.map((item) => item * item).reduce((sum, item) => sum+item);
}
console.log(kareAl(arr));

//?6 -An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
function isAnagram(a, b) {
  let counter = 0;
  for (let i of a) {
    for (let j of b) {
      if (i === j) {
        counter++;
      }
    }
  }
  return a.length < counter
    ? `True, The word ${a} is an anagram of ${b}`
    : `false, Characters do not match for test case ${a}, ${b}`;
}

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("Twoo", "WooT"));
console.log(isAnagram("apple", "pale"));


let x = "foefet";
let y = "toffee";
function anagram(x, y) {
  return x.split("").sort().join("") === y.split("").sort().join("");
}
console.log(anagram(x, y));