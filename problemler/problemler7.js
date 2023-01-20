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
 return arr2.filter(item => !arr.includes(item))[0]
}

// console.log(arrr(arr));
console.log(arrr([1,2,3,4,5]));
console.log(arrr([-1,-2]));
console.log(arrr([3,5,2,-2]));
console.log(arrr([-1,1, 2,3, 8, -5, 7, 6]));




