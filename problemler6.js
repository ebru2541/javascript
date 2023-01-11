// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// An example:
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// console.log(a);
const combine = (objA, objB) => {
  let result = {};
 for(let [keya,valuea] in objA){
  console.log(keya)
 for(let [keyb, valueb] in objB){

 }
 
  return keyb
};

console.log(combine(objA, objB));

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6,
    },
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "White",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4,
    },
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2018,
    color: "Red",
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    year: 2017,
    color: "Black",
    mileage: 10000,
    engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4,
    },
  },
  {
    id: 5,
    make: "Dodge",
    model: "Challenger",
    year: 2016,
    color: "Blue",
    mileage: 5000,
    engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6,
    },
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: 2015,
    color: "Silver",
    mileage: 35000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 7,
    make: "Audi",
    model: "A4",
    year: 2014,
    color: "Black",
    mileage: 30000,
    engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4,
    },
  },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2013,
    color: "White",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6,
    },
  },
  {
    id: 9,
    make: "Volkswagen",
    model: "Golf",
    year: 2012,
    color: "Red",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4,
    },
  },
  {
    id: 10,
    make: "Tesla",
    model: "Model S",
    year: 2011,
    color: "Silver",
    mileage: 15000,
    engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4,
    },
  },
];
// 1- Rengi gümüş olan arabaları bir listeye ata.
carData.filter((item) => item.color == "Silver").map((m) => console.log(m));

// 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.
carData.filter((item) => item.year > 2015).map((m) => console.log(m));
// 3- Arabaların ortalama kilometre değerini hesapla.
const milAvg =
  carData.map((m) => m.mileage).reduce((acc, item) => (acc += item), 0) /
  carData.length;
console.log(milAvg);

// 4- 8 silindirli araçları listele
const cylinders = carData.filter((f) => f.engine.cylinders == 8).map((m) => m);
console.log(cylinders);
// 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
// keys = ["a", "b", "c", "d", "e"];
// values = [1, 2, 3];
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
let keys = ["a", "b", "c", "d"];
let values = [1, 2, 3];
function createDict(keys, values) {
  let result = {};
  keys.map((m, i, arr) => {
    i <= values.length - 1
      ? (result[arr[i]] = values[i])
      : (result[arr[i]] = "nulll");
  });
  return result;
}
console.log(createDict(keys, values));


//yada

// const createDict = (keys1, values1) => {
//   const dict = {};
//   keys1.forEach((key, index) => {
//     dict[key] = values1[index] || null;
//   });
//   return dict;
// };
// let keys1 = ["a", "b", "c", "d"];
// let values1 = [1, 2, 3];
// console.log(createDict(keys1, values1));
// 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.

let obj = { a: 1, b: 2, c: 3 };
function reverseDict(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(reverseDict(obj));
