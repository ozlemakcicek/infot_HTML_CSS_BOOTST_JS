//! Function

//f(x) =2x+2  matematikteki function

function myFunc(x){

    return 2*x + 1
}

var result=myFunc(3);
console.log(result);
// bu sekilde fonksiyonu bir degsikende de tutabilirsin istersende direkt console.log(funktion adi(argumant)) seklinde de yazablrsn

//!----------------------------


function myFunc1(name, surName){
    return name + " " + surName;
}

var result1=myFunc1("Ali", "Demir");
console.log(result1);




//! object  ; objedeki key :value ikilisine prop denilir

var myObject={
    firstName:"Ali",
    surName:"Ak",
    age: 30

}

console.log(myObject);  // butun objeye ulasilir
console.log(myObject.surName); //! objelerde iki sekilde ulasabiliriz.1.si nokta operatoru ile
console.log(myObject["firstName"]);  //! 2.si ise indis no degilde ["key"]ile ulasilir.cok yaygin degil

//? *****************************************************************************************************************************
//! objenin elemanlarini fonksiyon icinde kullanarak return etmek.  boylece birlestirebiliriz obje elemanlarini
// yukarida tanimladigimiz myFunc1 fonksiyonuna argumant olarak objenin firsName ve surName ini gonderip onu da bir degiskene atayip yazdiriyoruz

var resultObject = myFunc1(myObject.firstName, myObject.surName)
 console.log(resultObject);

//? *************************************************************************************************************************************

//! Array

var myArray=[
    "Fenerbahce",
    "Galatasaray",
    "Besiktas",
    "Tuzlaspor",
    [
        {lig1:"1.Lig", lig2: "2.Lig"},
        {basketlig1:"basketLig1", basketlig2: "basketLig2"},

    
    ],
];

console.log(myArray[4][0].lig1 + "Sampiyonu" + myArray[0]);  //array icindeki 4.indisdeki arraye ulastik.sonra o array in de 0.indisindeki objeye ulasip sonra o objede de nokta.key ismi ile de value ya ulasabiliriz
console.log(myArray[4]);
console.log(myArray[4][1]);
console.log(myArray[4][1].basketlig1); // 1.yazdirilma durumu
console.log(myArray[4][0]["lig2"]); // 2. yazdirilma durumu

console.clear();

//? *****************************************************************************************

//! referance ve primitive turler
//! referance turlerde bellekte adressleri tutulur(yani arrayin ilk halini degistirirsek onu atadigimiz diger array de otomatik degisir), primitive turlerde ise degerleri tutulur( degismez ilk hali yani)

//? primitive turler. bellekte tuttugu yeri korur ilk hali degismez, sadece degeri degisir
var num=5;

console.log(num);
var num2=num;
num=6;

console.log(num2);
console.log(num);


//? referance turler ; bellekte tuttugu yer degisir ilk halini korumaz. mesela yasimiz hersene degismesi lazim.bu durumda fiyat degisikligi, yas degisikligi durumlarinda referance turleri kullaniriz

var myArray=[
    "Fenerbahce",
    "Galatasaray",
    "Besiktas",
    "Tuzlaspor",
    [
        {lig1:"1.Lig", lig2: "2.Lig"},
        {basketlig1:"basketLig1", basketlig2: "basketLig2"},

    
    ],
];

var myArray2=myArray
console.log(myArray);
console.log(myArray2);

myArray[0]="Sivasspor"
console.log(myArray);
console.log(myArray2);

myArray[2]="Alamania Aachen"
console.log(myArray2);
console.log(myArray);

