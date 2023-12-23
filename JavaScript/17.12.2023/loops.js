//! Dönguler tekrar eden islemler icin kullanilir. Birden cok  Number veya string veya Array ler veya Objeler icindeki elemanlari isleme tabi tutarken kullaniriz. 3 tur dongu var. for, while, do-while



//? for dongusu

//! 1-for (baslangic; kosul; artis/ degsiim){
    //  dongu kodlarimizi yaziyoruz
//!}
// Bu uc sarti saglamali ve baslangic degiskenini for dongusunun icinde de disinda da tanimlayabilirz.


//! numberlarda for dongusunun kullanimi;

for(var i=0; i<5; i++ ){
    console.log(i);
}

//? baslangic degerini sadece bir kez calsitirir. sonra kosula bakar, kosul saglaniyorsa asagida yazan kodlari calistirir sora i yi 1 arttirir ve tekrar eder bu dongu kosul saglamayana kadar.


// bu aslinda su demek;
// var i=0;
// for (i<5;){
//     console.log(i);
//     .
//     .
//     .
//     .
//     .-

//     i++
// }


// 0 dan 100e kadar olamn sayilari yazdir
for (var i=0; i<100; i++){
    console.log(i);
}

console.clear();

// 100 den 0 dahil, sayilari yaz geriye dogru
for (var i=100; i>=0; i--){
    console.log(i);
}


console.clear();



//! Stirng ifadelerin for dongusunde kullanimi;

for (var i=0; i<50; i++){
    console.log(i, "bir daha yapmayacagim");  // 50 tane bu ifadeyi yazar
}


console.clear();

//! Arraylerde for dongusunun kullanimi;   kosula yine bir rakam lazim.bunu array.length ile saglariz. Array icinde her turden deger olabilir. boylece array icinden cikip alt alta yazar verileri.

var myNumber=[2,3,4,5,6,7,8,10,12,5,6,7,8,15];

for(var i=0; i < myNumber.length; i++){
    console.log(myNumber[i]);  // array lerdeki member lara indis no ile ulasiyoruz burda  butun hepsine ulasmak icin [i] diyoruz.
}

console.clear()


myString= ["blue", "green", "red", "yellow", "pink"];

var i=0;
for(i; i < myString.length; i++){

    console.log(myString[i]);
}

console.clear();

//! while dongusu

//? baslangic degiskeninin while dongusu icinde tanimlayamayiz.forda ise icerde veya disdarda tanimlayabilirsin. For ile yaptigimiz herseyi while ile de yapabiliriz.

//var i=0;
// while(kosul){
//     kodlarimizi9 yaziyoruz
// }



var i =0;
while(i<5){
    console.log(i);
    i++;
}


console.clear();


//! arrayler de while dongusu

var myNumber=[2,3,4,5,6,7,8,10,12,5,6,7,8];

var i =0;

while(i < myNumber.length){
    console.log(myNumber[i]);
    i++;
}

console.log("Devam");

console.clear()



//! 3- do-while dongusu; 

// do{
    // buraya kodlar yazilir.(yapilacak islemi yazariz buraya)

// } while(kosul)


//? asagidaki kosulun saglandigi durum

var i=0;
do {
    
console.log(i); // kosulu saglasin saglamasin once bir kez yazdir diyoruz.  ve devam ediyor
    i++;
} while (i<5);


console.log("-----------------------------------------------");


//? asagidaki kosulun saglanmadigi durum 

var i=0;
do {
    console.log(i);// asagidaki sart saglanmadi ama do while da bir kez yazdirir i yi.ekranda 0 gorururz sadece
    i++
} while (i<0);    





//!while ile do-while farki biri sarta bakip sonra islem yapar.digeri once yapar sonra kosula bakar

var i=0;
while(i<0){
    console.log(i);  // while da ise ustteki sarti sagliyorsa yazdiriyor.burda saglamadigi icin hicbirsey yazdirmiyor
    i++;
}



// kosul saglanmadigi icin yine  hicbirsey yazdirmaz while dongusunde
var i=0;

while(i < 0){
    console.log("bir daha yiuksek sesle konusmayacagim");
    i++;
}

// do-while da ise kosul saglansin saglanmasin birkez yazdirir

var i=0;
do {
    console.log("yuksek sesle konusma!");
    i++;
} while (i<0);   // saglanmiyor ama yinede usttekini bir kez yazdirdi.

//? i yi her defasinda tanimlamaya gerek yok. bir kez tanimladiysak yukarida onu kullanir.fakat dikkat etmek gerekir ki, eger kosulda i<5 derse en sonki i degeri artik 5 olmustur ve yeni yazacagimiz dongude yeniden var i=0 demez isek, artik 0 degilde 5 olarak kabul eder i yi.

console.log("--------------------------------------------");


var i=0;
do {
    console.log(i, "yuksek sesle konusma!");
    i++;
} while (i<5);  