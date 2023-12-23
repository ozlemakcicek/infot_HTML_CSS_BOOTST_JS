
//! ARRAY METHODLARI

//! burdaki array lere .method adi ile ulasiyoruz.Ama aslinda arraylere . ile ulasilmaz.objelere bu sekilde ulasilir.peki nasil oluyor bu?
//! aslinda javascript windows objesinin icindeki bir programlama dili.biz ulasirken once wqindows objesini yazip sonra .method adi ile de js e ulasiyoruz.windows u yazmiyoruz fakat browserin kendisinin windows objesi oldugunu bil


//!1-  .length
var fruits=["Apple", "Banana", "Orange", "Mango"]

console.log(fruits.length);



//!2- .toString() 
//listeden cikartir ve string yapar

var fruits=["Apple", "Banana", "Orange", "Mango"]

console.log(fruits.toString());  // Apple,Banana,Orange,Mango

//!3- .join()  
//ayni toString gibi calisir ama farki araya istedigin operatoru koyabilirsin

var fruits=["Apple", "Banana", "Orange", "Mango"]

console.log(fruits.join("*"));  // Apple*Banana*Orange*Mango


//!4- .pop()  
//son elemni kaldirir ve diziyi degilde o kaldirdigi ogeyi dondurur.diziyi gormek icin tekrar diziyi yazdir

var fruits=["Apple", "Banana", "Orange", "Mango"]

console.log(fruits.pop()); // Mango

console.log(fruits);  // 'Apple', 'Banana', 'Orange']


//!5- push()  
//sona ekler.yeni bir dizi olusturup atarsin ona

var fruits=["Apple", "Banana", "Orange", "Mango"];

var result=fruits.push("kiwi");



console.log(fruits);  // ['Apple', 'Banana', 'Orange', 'Mango', 'kiwi']


//! 6- .shift() 
// en bastan kaldirir ve onu dondurur

var fruits=["Apple", "Banana", "Orange", "Mango"];

var resultShift=fruits.shift();
console.log(resultShift);           // Apple
console.log(fruits);          // ) ['Banana', 'Orange', 'Mango']


//! 7-  unshift()  
//en basa ekler

var fruits=["Apple", "Banana", "Orange", "Mango"];

var resultUnShift=fruits.unshift("Lemon");
console.log(resultUnShift);   // 5  length ini verir
console.log(fruits);   // ['Lemon', 'Apple', 'Banana', 'Orange', 'Mango']

//! 8- concat()

var myGirls=["Ayse", "Fatma"]
var myBoys=["Ahmet", "Mehmet"]
var myFamilie=["Hasan", "Zeynep"]

console.log(myGirls.concat("Cansu"));
console.log(myBoys.concat("Can"));
console.log(myGirls.concat(myBoys, myFamilie));

console.clear()


//! 9- splice()  
//yeni oge ekler kactane ekleyecegimizi de belirtebiliirz.nereye ekleye4cegmzi de belirtebiliriz. birkac durumu var. silmeden ekle silip yeniyi ekle, istedigimiz yere ekle gibi

var fruits=["Apple", "Banana", "Orange", "Mango"];

//1
fruits.splice(2, 0, "Lemon", "Kiwi")  // 2.indise hicbirsey silmeden ekle dedik
console.log(fruits);

//2
fruits.splice(1,2, "Melon", "Avacado") //  1.indisden basla 2 tane ogeyi sil ve sunlari ekle dedik
console.log(fruits);

//3
// fruits.splice(1) // eger hicbir silinecek numara vermezsek 1.indisden sonraki geri kalan hepsini siler.
// console.log(fruits);


//4
fruits.splice(1,3) // 1.indisden sonraki 3 taneyi sildi kalanlari yazdirdi
console.log(fruits);

console.clear()


//!10- slice() 
//dilimleme icine yazilandan itibaren dilimler.iki parametre yazarsan surdan suraya deriz

var fruits=["Apple", "Banana", "Orange", "Mango"];

var resultSlice=fruits.slice(1)  // ['Banana', 'Orange', 'Mango']

console.log(resultSlice);

var resultSlice2= fruits.slice(1,3)
console.log(resultSlice2);
console.log(fruits);