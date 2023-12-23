
//! KOSUL IFADELERI;  herzaman dongulerle kosul saglamak zorunda degiliz.dongusuz kosul yazma durumu da var. if/ if else/ if elif elif ... else


//! if yapisi; once degiskeni tanimla

// var degisken= deger
// if(kosul){
  // kosul saglandiktan sonraki kod parcaciklari
// }


//! karsilastirma operatorleri ile numberlar ;

var x=5;

if(x>0){
    console.log(x," Pozitif bir sayidir");
}


//burda ise hicbirsey yazmaz cunku if sarti saglanmiyior
var x=5;

if(x>10){
    console.log(x," Pozitif bir sayidir");
}
console.log("Devam ediyor");

console.clear()


//! string ifadelerin karsilastirilmasi
// bunu yazmaz cunku ASCIcode a gore a b den kucuk.sarti saglanmaz.

if("a"> "b"){
    console.log("a b'den buyuktur");
}


if("a"< "b"){
    console.log("a b'den kucuktur");
}


//!boolean ifadelerin karsilastirmasi

var isPass = true;   // bir kez tanimladik asagida ayriyeten tanimlamiyorsak bu gecerli her yerde.
if(isPass === true){
    console.log("Tebrikler gectiniz");
}
// true true ya esitmidir diye yazdik if icine.=== ile karsilastirdik.asagida da == ile karsilastiriyrz.ustte bir kez isPass i true olarak tanimladik bu yeterli tekrar tanimlamaya gerek yok.


if(isPass == true){
    console.log("Tebrikler gectiniz");
}


// degil ifadesi !

if(isPass !== true){
    console.log("malesef kaldiniz");
}

// burda true degilse dedik ama tanimlamada true .o yuzden birsey yazmaz ekrana
console.clear()


// if(isPass==true ) ile ayni anlamdadir if(isPass) demek.true da yazmaya gerek yok
if(isPass){
    console.log("gectiniz");
}

// if(!isPass) ise  true degilse demek.! yokken true demektir.varken false. ki var ile tanimlarken de false diye tanimladigimiz icin hemen bir ustte sart saglanmis oldu ve ekranda yaziyi gorduk

var isPass=false
if(!isPass){
    console.log("üzgunuz kaldiniz");
}


console.clear()

//! birkac ksoullu durumlar. & ve || mantiksal operatorleri

//? && operatoru ile;

var student={
    firstName:"Ali",
    noteOrt: 70,
    isPass:true
};

if (student.noteOrt >=60 && student.isPass){
    console.log("Tebrikler bir ust sinifa gectiniz");
}
// noteOrt si 60 ve ustu ise ve isPass durumu true ise yazdir dedik


//? || operatoru ile;

var student={
    firstName:"Ali",
    noteOrt: 70,
    isPass:false
}

if (student.noteOrt >=60 || student.isPass){
    console.log("Tebrikler bir ust sinifa gectiniz");
}

// burda || dan sonraki sart saglanmadi aslinda ama veya da onemli degil bir sart saglaniyorsa tamamadir.student.isPass demek true demek ama obje icinde false yaziyor.
console.clear()



//basina ! koyarak student.isPass(bu true demek) i false ise ye cevirdik ki objede de oyle zaten.
var student={
    firstName:"Ali",
    noteOrt: 70,
    isPass:false
}

if (student.noteOrt >=60 || !student.isPass){
    console.log("Tebrikler  sinif atladiniz!");
}



// basina ! koyduk ve hicbir kosul saglanmadigi icin hicbirsey yazmaz.cunku obje icinde isPass=true diyor asagida !student.isPass(false demek) ve notOrt da sarti saglamiyor.

var student={
    firstName:"Ali",
    noteOrt: 50,
    isPass:true
}

if (student.noteOrt >=60 || !student.isPass){
    console.log("Tebrikler bir ust sinifa gectiniz");
}

console.clear()



//! 2. if else (iki kosullu ifadedir.)

var num= -5;
if (num>0) {
    console.log(num, "Pozitif sayi");
} else {
    console.log(num, "negatif sayi");
}


//************ */
var student={
    firstName:"Ali",
    noteOrt: 30,
    isPass:false
};

if (student.noteOrt >= 60) {
    console.log("Tebrikler...");
} else {
    console.log("Uzgunuz");// ustteki kosul saglanmadigi icin else ye duser
}



console.clear()

//! dongu - kosul beraber kullanimi!

var students=[
    
       { name: "Ali", not : 50},
       { name: "Ahmet", not: 60},
       { name: "Hasan", not: 70},
       { name: "Mehmet", not: 80},
       { name: "Cemal", not: 90},

    
];

for(var i=0; i<students.length; i++){

    if(students.not >=60){
        console.log(students[i].name,"Tebrikler Gectiniz"); // array in icinde dolasiyoruz.ve bunlara [] ile indis no ile ulasiriz.
    }else{
        console.log(students[i].name, "Uzgunuz kaldiniz");
    }
}


//! 3. if elseif(elif)  -- ikiden fazla kosul olma durumu

// if(kosul1){
    //kod parcaciklari
// }else if(kosul2){

// }else if(kosul3){

// }else{

// }



var number = 0;

if(number>0){
    console.log("Sayi Pozitiftir");

}else if(number<0){
    console.log("Sayi negatiftir");

}else{
    console.log("Sayi sifirdir");
}

console.clear();


//******************************************* */
var days=[
    "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag","Samstag","Sonntag"
]

for(var i=0; i < days.length; i++){

    if(i < 5){
        console.log(days[i],"Calisma gunleri");
    }else{
        console.log(days[i], "Tatil Günleri");
    }
}

