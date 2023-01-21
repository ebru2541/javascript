// const validEmail = (email) => {
//   return email.includes("@") &&
//     (email.length - email.lastIndexOf(".") <= 4 ||
//       email.length - email.lastIndexOf(".") > 2)
//     ? Alert("Email adresiniz doğru.")
//     : Alert("Email adresiniz yanlış, tekrar deneyiniz.");
// };

// console.log(validEmail("asd@sjdf.kgrftghlk.co"));

//?dizedeki elemanlar içinde olmayan en küçük pozitif tamsayıyı return et

let arr2 = [];
function arrr(arr) {
  let newarr = arr.filter((i) => i > 0);
  for (let i = 1; newarr.sort().at(-1) + 2 > i; i++) {
    arr2.push(i);
  }
  return arr2.filter((item) => !arr.includes(item))[0];
}

// console.log(arrr(arr));
console.log(arrr([1, 2, 3, 4, 5]));
console.log(arrr([-1, -2]));
console.log(arrr([3, 5, 2, -2]));
console.log(arrr([-1, 1, 2, 3, 8, -5, 7, 6]));

//*roman rakamları

NtoR(sayi) {
        let M = 0;
        let D = 0;
        let CD = 0;
        let C = 0;
        let CM = 0;
        let L = 0;
        let X = 0;
        let IX = 0;
        let XL = 0;
        let XC = 0;
        let V = 0;
        let IV = 0;
        let I = 0;

        if (sayi<=3000) {

        if (sayi >= 1000) {
          M = parseInt(sayi / 1000);
          console.log(M);
          sayi = sayi - M * 1000;
        }
        if (sayi >= 900) {
          CM = parseInt(sayi / 900);
          console.log(CM);
          sayi = sayi - 900;
        }

        if (sayi >= 500) {
          D = parseInt(sayi / 500);
          console.log(D);
          sayi = sayi - D * 500;
        }
        if (sayi >= 400) {
          CD = parseInt(sayi / 400);
          console.log(CD);
          sayi = sayi - 400;
        }

        if (sayi >= 100) {
          C = parseInt(sayi / 100);
          console.log(C);
          sayi = sayi - C * 100;
        }
        if (sayi >= 90) {
          XC = parseInt(sayi / 90);
          console.log(XC);
          sayi = sayi - 90;
        }
        if (sayi >= 50) {
          L = parseInt(sayi / 50);
          console.log(L);
          sayi = sayi - L * 50;
        }
        if (sayi >= 40) {
          XL = parseInt(sayi / 40);
          console.log(XL);
          sayi = sayi - 40;
        }
        if (sayi >= 10) {
          X = parseInt(sayi / 10);
          console.log(X);
          sayi = sayi - X * 10;
        }
        if (sayi >= 9) {
          IX = parseInt(sayi / 9);
          console.log(IX);
          sayi = sayi - 9;
        }

        if (sayi >= 5) {
          V = parseInt(sayi / 5);
          console.log(V);
          sayi = sayi - V * 5;
        }
        if (sayi >= 4) {
          IV = parseInt(sayi / 4);
          console.log(IV);
          sayi = sayi - 4;
        }
        if (sayi >= 1) {
          I = parseInt(sayi / 1);
          console.log(I);
          sayi = sayi - I * 1;
        }

        return (
          "M".repeat(M) +
          "CM".repeat(CM) +
          "D".repeat(D) +
          "CD".repeat(CD) +
          "C".repeat(C) +
          "XC".repeat(XC) +
          "L".repeat(L) +
          "XL".repeat(XL) +
          "X".repeat(X) +
          "IX".repeat(IX) +
          "V".repeat(V) +
          "IV".repeat(IV) +
          "I".repeat(I)
        );
      }
      else {
        alert(" Girilen sayi 3000'den fazla olamaz")
      }
      }
      console.log(NtoR(3001));