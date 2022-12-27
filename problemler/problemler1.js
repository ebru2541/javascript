// //? girilen sayı 20 den küçük ise aradaki farkın karesini 20 den büyükse aynı sayıyı ekrana yazdır

// function fark(sayi) {
//   if (sayi > 20) {
//     return (sayi - 20) * 2;
//   } else {
//     return sayi;
//   }
// }
// console.log(fark(15));
// console.log(fark(30));

// // //? iki sayı girişi al bunlardan hangisinin büyük old bulan fonk yaz.
// function big(a, b) {
//   if (a > b) {
//     return `${a}, ${b} den büyüktür.`;
//   } else {
//   }
//   return `${b}, ${a} den büyüktür.`;
// }
// console.log(big(8, 5));

// //? 100 ile 1000 arasında 3 ve 5 bolünen sayıları yazın

// const kat = () => {
//   // let arr = [];
//   let str = "";
//   for (let i = 100; i <= 1000; i++) {
//     if (i % 15 == 0) {
//       // arr.push(i)
//       str += i + " ";
//     }
//   }
//   return str;
// };

// //! 2.yol
// const division = () => {
//   let arr = "";
//   let say;
//   for (let i = 100; i <= 1000; i++) {
//     if (i % 15 == 0) {
//       arr += i + ", ";
//     }
//   }
//   return arr;
// };
// console.log(division());


// //? üçgenin alanını bulun
// let a = prompt("üçgenin taban uzunluğunu yazın:");
// let h = prompt("üçgenin yüksekliğini yazın:");
// let alan = a * h * 0.5;
// console.log(alan);

// //? girilen ayın kaç gün çektiğini ekrana yazdırın

// let monthUserInput = (month) => {
//   let month1 = month.toLowerCase();
//   if (
//     month1 == "january" ||
//     month1 == "march" ||
//     month1 == "may" ||
//     month1 == "july" ||
//     month1 == "august" ||
//     month1 == "october" ||
//     month1 == "december"
//   ) {
//     return `${month} has 31 days`;
//   } else if (
//     month1 == "april" ||
//     month1 == "june" ||
//     month1 == "september" ||
//     month1 == "november"
//   ) {
//     return `${month} has 30 days`;
//   } else if (month1 == "february") {
//     return `${month} has 28 days`;
//   } else {
//     return "enter a true month";
//   }
// };

// console.log(monthUserInput("april"));

// //? kısa ve uzun kenarı verilen dikdörtgenin çevresini ve alanını

// function dikDotrgen(x, y) {
//   return `alan=${x * y}, çevre=${2(x + y)}`;
// }
// console.log(dikDotrgen(20, 15));

// //? dairenin alanını bulun
// function daire(r){
//   let pi=3.14
//   let alan= pi * r * r
//   let cevre=2 *pi * r
//   return  alan, cevre
// }
// console.log(daire(3));
// console.log()
// `alan=${alan}, cevre=${cevre}`;


// //! Clarusway'deki haftalik ders ve etkinlik programinizi,
// //! console'dan girilen gun degerine gore cikti veren kodu
// //! switch-case yapisi ile yaziniz.

// //! Program
// //! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
// //! Cuma -> Teamwork
// //! Cumartesi ->  InClass + Workshop
// //! Pazar -> Self-Study
// //! Aksi takdirde -> Yanlis gun girildi.

//       const day = prompt("Programini istediginiz gunu giriniz:");

//       let program;

//       switch (day) {
//         case "pazartesi":
//         case "sali":
//         case "carsamba":
//         case "persembe":
//           program = "InClass";
//           break;
//         case "cuma":
//           program = "Teamwork";
//           break;
//         case "cumartesi":
//           program = "InClass + Workshop";
//           break;
//         case "pazar":
//           program = "Self-Study";
//           break;

//         default:
//           alert("Yanlis gun girildi.");
//           break;
//       }
//       console.log(`Bugunku programiniz: ${program}`);

//  //? Dort Islem Hesap Makinasi (2 Sayı bir operator, if-elseif)
// function calculator(a, b, islem) {
//   if (islem === "+") {
//     return a + b;
//   } else if (islem === "-") {
//     return a - b;
//   } else if (islem === "*") {
//     return a * b;
//   } else if (islem === "/") {
//     return a / b;
//   }
//   else{
//     return `+, *, *, / işlemlerinden birini seçiniz`
//   }
// }
// console.log(calculator(2, 4, "+"));

// //?Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

// let maas=prompt("maaşınızı yazınız: ")
// let asgariUcret=5500
// let maasHes= maas > asgariUcret ? maas*1.1 : maas*1.5
// console.log( `yeni maaşınız: ${maasHes}`);

// //?Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.

// let sayac = 0;
// let toplam = 0;
// let n = prompt("kaç tane sayı girişi yapılacak: ");
// while (n > sayac) {
//   let sayi = Number(prompt("bir sayı giriniz: "));
//   sayac++;
//   toplam += sayi;
// }
// console.log(`girilen ${n} sayının ortalaması ${(toplam / sayac).toFixed(2)}`);

// //? Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.
// let k = 0;
// let sayı = 1;
// let taban = +prompt("hesaplamak istediğiniz üslü sayının tabanını yazınız: ");
// let us = +prompt("hesaplamak istediğiniz üslü sayının üssünü yazınız:");
// while (us > k) {
//   sayı *= taban;
//   k++;
// }
// console.log(`${taban}**${us}= ${sayı}`);

// //? Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.
// let a = +prompt("Bir sayi giriniz")
// let basamak= 0;
//  for(let i=1; a>=i; i=i*10){
//   basamak=basamak+1
//  }
//  console.log(basamak)

// //?text = "Turkey";
// //?Let's write a program that prints every character twice
// //?output: TTuurrkkeeyy
// let text = "Turkey";
// let newText = "";
// for (let i = 0; text.length > i; i++) {
//   newText += text[i] + text[i];
// }
// console.log(newText);

// //*2 yol
// let twice = "";
// for (let i of text) {
//   twice += i + i;
// }
// console.log(twice)
// //?0’dan 100’e kadar olan çift sayıları ekrana yazdıran programın algoritmasını yazınız.


// //?1’den 50’ye kadar olan çift sayıların toplamını bulup ekranda gösteren programın algoritmasını yazınız.