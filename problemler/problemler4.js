//?Exercise-5
//?Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
//?pyramid(0) => [ ]
//?pyramid(1) => [ [1] ]
//?pyramid(2) => [ [1], [1, 1] ]
//?pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
//?Note: the subarrays should be filled with 1s

// function pyramid(number) {

//   let arr1 = [];
//   for (let i = 0; number > i; i++) {
//     let arr = []
//     for (let j = 0; j > i + 1; j++)
//     {
//       arr1.push(j);
//     }
//     arr1.fill(1);
//   }
//   return arr.push(arr1);
// }
// console.log(pyramid(3));

// function pyramid(n) {
//   const res = [];
//   for (let i = 0; i < n; i++) {
//     res.push(Array(i+1).fill(1));
//   }
//   return res;
// }
// console.log(pyramid(0));
// console.log(pyramid(1));
// console.log(pyramid(2));
// console.log(pyramid(3));

// const pyramid1 = (num) => {
//   let arr = [];
//   for (i = 0; i < num; i++) {
//     arrArr = [];
//     for (j = 0; j < i + 1; j++) {
//       arrArr.push(j);
//     }
//     arrArr.fill(1);
//     arr.push(arrArr);
//   }
//   return arr;
// };
// console.log(pyramid1(3));

// res.push([...Array(i+1).fill(1)])
// arr.insert(index, item)
// let res = "";
// for (let i = 0; i < 6; i++) {
//   for (let j = 1; j <= i; j++) {
//     res += "0";
//   }
//   res += "\n";
// }

// console.log(res);

// console.log([[12345], [12334]]);
// let a=[1,2,3]
// let b=[1,2,3]

// console.log([a] + [b]);

// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
// Examples-->
// check([66, 101], 66) // output -->  true
// check([101, 45, 75, 105, 99, 107], 107) // output -->  true
// check(['t', 'e', 's', 't'], 'e') // output -->  true
// check(['what', 'a', 'great', 'kata'], 'kat') // output -->  false

// const check = (arr, check) => {
//   return arr.indexOf(check) > -1 ? true : false;
// };
// console.log(check(["what", "a", "great", "kata"], "kat"));
// console.log(check(["t", "e", "s", "t"], "e"));

//?----------------------------------------------------
//?Find the closest palindrome number for your code:

//?Example:
//?Input: 216
//?Output: 212

//?Input: 100
//?Output: 99

//?Input: 77
//?Output: 77

//?NOTE:
//?- palindrome number is number is same from left - right side
//?- If the number itself is a palindrome, return that number.
//?- If two palindrome numbers distance is same choose smaller number.

// const palindrome=(sayi)=>{
// sayi=sayi+""
// if(sayi.split("").reverse().join("") === sayi){
//     return sayi
// }
// else{
//     for(let i=sayi - 1; i>0; i++){
//         i=i+""
//         if (i.split("").reverse().join("") == i) {
//          return i
//         }
//     }
// }
// }

// const palindrome = (sayi) => {
//   while (true) {
//     sayi = sayi + "";
//     if (sayi.split("").reverse().join("") === sayi) {
//       return sayi;
//     }
//     sayi--
//   }
// };
// console.log(palindrome(100));
// console.log(palindrome(216));
// console.log(palindrome(77));

//?Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// let a = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function counter() {
//   a=a+""
//   return a.split("true").length - 1;
// }
// console.log(counter(a))

//?A = [12, 14, 16]; 
//?B = [11, 13, 17];
//?expectedOutput = [11, 12, 13, 14, 16, 17];
//?A = [];
//?B = [11, 13, 17];
//?expectedOutput = [11, 13, 17];

let a = [11, 13, 17];
let b=[];

let toplam=a.concat(b)
console.log(toplam)
console.log([a+","+b]);
console.log()