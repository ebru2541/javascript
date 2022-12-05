//? array olusturma
const dizi = ["ali", "veli", "deli"];
console.log(dizi);

const dizi1 = new Array("ali", "veli");
console.log(dizi1);

//* eleman sayısı
console.log(dizi.length);

//* indisleme
console.log(dizi[0]);

//*dizinin son elemanı
console.log(dizi[dizi.length - 1]);
console.log(dizi.at(-1));

//*dizideki veriyi  değiştirmek
const araba = ["bmw", "audi", "volvo"];
araba[0] = "reno";
console.log(araba);

//*dizinin 0. indisine eleman ekleme
const ar = araba.unshift("as");
console.log(araba);

//*dizinin sonuna ekleme
const ar1 = araba.push("5");
console.log(araba);

//*araya eleman ekleme splice(eklenecek indis no, 0:ise araya ekle 1:ise üzerine yaz, eklenecek eleman)
var liste = ["Elma", "Armut", "Portakal"];
console.log(liste);
liste.splice(1, 0, "Muz", "Kivi");
console.log(liste);

//*dizinin ilk elemanını silme
const er = araba.shift();
console.log(araba);
console.log(er);

//*son elemanı silme
const er1 = araba.pop();
console.log(araba);
console.log(er1);

//* dizide aradan eleman silmek
delete araba[1];
console.log(araba);

//*ters çevirme
araba.reverse();
console.log(araba);

//*sıralama buyuk-kucuk harf önemli
const harf = ["a", "b", "k", "d"];
const harf1 = harf.sort();
console.log(harf1);

//? diziye erişim metodları
//* includes() dizinin eleman içerip içermediğine bakar T/F
console.log(harf.includes("d"));

//*join() dizinin elemanlarını birleştirir ve str yapar
const sayılar = [1, 2, 5, 7, 3, 9];
console.log(sayılar.join("-"));
console.log(sayılar.join(""));
console.log(sayılar.join("ve"));

//*
