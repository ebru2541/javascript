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
// 1- Rengi g??m???? olan arabalar?? bir listeye ata.
carData.filter((item) => item.color == "Silver").map((m) => console.log(m));

// 2- 2015 y??l??ndan sonra ??retilmi?? arabalar?? bir listeye ata.
carData.filter((item) => item.year > 2015).map((m) => console.log(m));
// 3- Arabalar??n ortalama kilometre de??erini hesapla.
const milAvg =
  carData.map((m) => m.mileage).reduce((acc, item) => (acc += item), 0) /
  carData.length;
console.log(milAvg);

// 4- 8 silindirli ara??lar?? listele
const cylinders = carData.filter((f) => f.engine.cylinders == 8).map((m) => m);
console.log(cylinders);
// 5- Farkl?? uzunlukta olmas?? muhtemel iki listeden ??lki key'lerden, ikincisi ise Value'lardan olu??maktad??r. Yine key ve value'lardan olu??an bir obje d??nd??ren bir fonksiyon yaz??n??z. Yeterli value yoksa, kalan keylerin de??eri null olmal??d??r. Yeterli anahtar yoksa, de??erlerin geri kalan??n?? yok say??n.
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
// 6- Bir obje i??erisindeki key ve value'lar?? de??i??tirin. Yani key'ler value'lar olmal?? ve value'lar key'ler olmal??d??r.
// ??rnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: E??er bir value birden fazla key'e sahipse, son key'i kullan??n.

let obj = { a: 1, b: 2, c: 3 };
function reverseDict(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(reverseDict(obj));



const carData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver',
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6
    }
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    color: 'White',
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4
    }
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    color: 'Red',
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    color: 'Black',
    mileage: 10000,
     engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4
    }
  },
  {
    id: 5,
    make: 'Dodge',
    model: 'Challenger',
    year: 2016,
    color: 'Blue',
    mileage: 5000,
     engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6
    }
  },
  {
    id: 6,
    make: 'BMW',
    model: '3 Series',
    year: 2015,
    color: 'Silver',
    mileage: 35000,
     engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 7,
    make: 'Audi',
    model: 'A4',
    year: 2014,
    color: 'Black',
    mileage: 30000,
     engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4
    }
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2013,
    color: 'White',
    mileage: 25000,
     engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6
    }
  },
  {
    id: 9,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2012,
    color: 'Red',
    mileage: 20000,
     engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4
    }
  },
  {
    id: 10,
    make: 'Tesla',
    model: 'Model S',
    year: 2011,
    color: 'Silver',
    mileage: 15000,
     engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4
    }
  },
]
// 1- Rengi g??m???? olan arabalar?? bir listeye ata.
// cevap
const silverCars = carData.filter(car => car.color === 'Silver')
console.log(silverCars)
// 2- 2015 y??l??ndan sonra ??retilmi?? arabalar?? bir listeye ata.
// cevap
const newCars = carData.filter(car => car.year > 2015)
console.log(newCars)
// 3- Arabalar??n ortalama kilometre de??erini hesapla.
// cevap
const averageMileage = carData.reduce((total, car) => total + car.mileage, 0) / carData.length
console.log(averageMileage)
// 4- 8 silindirli ara??lar?? listele
// cevap
const eightCylinderCars = carData.filter(car => car.engine.cylinders === 8)
console.log(eightCylinderCars)
// 5- Farkl?? uzunlukta olmas?? muhtemel iki listeden ??lki key'lerden, ikincisi ise Value'lardan olu??maktad??r. Yine key ve value'lardan olu??an bir obje d??nd??ren bir fonksiyon yaz??n??z. Yeterli value yoksa, kalan keylerin de??eri null olmal??d??r. Yeterli anahtar yoksa, de??erlerin geri kalan??n?? yok say??n.
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// cevap
const createDict = (keys, values) => {
  const dict = {}
  keys.forEach((key, index) => {
    dict[key] = values[index] || null
  })
  return dict
  
  
}
let keys = ['a', 'b', 'c','d']
let values = [1, 2, 3]
console.log(createDict(keys, values));
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
// 6- Bir obje i??erisindeki key ve value'lar?? de??i??tirin. Yani key'ler value'lar olmal?? ve value'lar key'ler olmal??d??r.
// ??rnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: E??er bir value birden fazla key'e sahipse, son key'i kullan??n.
// ????z??m
let obj = {a: 1, b: 2, c: 3}
function reverseDict(obj) {
  let newObj = {}
  for (let key in obj){
    newObj[obj[key]] = key
  }
  return newObj
}
console.log(reverseDict(obj));
// 6- 
// Size baz?? dilleri ve verilen dillerdeki test sonu??lar??n??z?? i??eren bir dictionarj obj verilir. Test puan??n??z??n en az 60 oldu??u dillerin listesini sonu??lar??n azalan s??ras??na g??re d??nd??r??n.
// Not: puanlar her zaman benzersiz olacakt??r (bu nedenle yinelenen de??erler olmayacakt??r)
// ??rnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// ????z??m
let results = {"Java": 10, "Ruby": 80, "Python": 95}
function myLanguages(results) {
  let filteredObj ={}
  let arr = []
  for (let key in results){
    if(results[key] >= 60){
      filteredObj[key] = results[key]
    }
  }
arr =Object.values(filteredObj).sort((a,b)=> b-a)
let sortedObj = {}
arr.forEach((value)=>{
  for(let key in filteredObj){
    if(filteredObj[key] === value){
      sortedObj[key] = value
    }}})
  return sortedObj
   
  
}
console.log(myLanguages(results));