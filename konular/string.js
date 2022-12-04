firstname = "Ali";
lname = "Velideli";
//? birleştirme
console.log(firstname + " " + lname);
console.log(firstname.concat(" ", lname));
console.log(firstname, " ".concat(lname));

//? büyük-küçük harf
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(firstname.toLocaleUpperCase("tr"));
console.log(firstname.toLocaleLowerCase("tr"));

//? bölme
console.log(lname.slice(5));
console.log(lname.slice(0, 7));
console.log(lname.slice(-3));
console.log(lname.substring(0));

//? karakter arama
//* sadece içerisine str alır
console.log(lname.indexOf("d"));

//* aradıgımız karakter yoksa -1 dondurur
console.log(lname.indexOf("t"));

//* içerisine number, str ve karakter alır
console.log(lname.search("k"));

//* true ve false dondurur
console.log(lname.includes("l"));
console.log(lname.includes("k"));

//? index numarası ile arama
console.log(lname.at(5));
console.log(lname.at(-1));
console.log(lname.charAt(1));

//? değiştirme
console.log(lname.replace("l", "k"));
console.log(lname.replace(/i/gi, "k"));

console.log(lname.replaceAll("l", "k"));

//? parçalama bu yontem array e çevirir
let hava = "bugun hava çok güzel";
console.log(hava.split(" "));
console.log(hava.split(""));
console.log(hava.split("g"));

//? stringe çevirme yöntemleri

let n = 5;
console.log(typeof n);

console.log(typeof n.toString());

console.log(typeof (n + ""));

console.log(typeof String(n));

//? str --> number çevirme

let str = "123";
console.log(typeof str);
console.log(typeof Number(str));
console.log(typeof parseInt(str));
console.log(typeof +str);
console.log(typeof parseFloat(str));

console.log(parseFloat("5.5"));
console.log(parseInt("5.5"));
