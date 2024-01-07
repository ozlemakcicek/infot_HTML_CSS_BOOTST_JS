const students=[

    {
    id:1,
    adi: "Mehmet",
    gender:"m",
    bolum:"muhendis",
    age:24,
    baslamaTarihi:2000,
    bitisTarihi:2016,
   

},
{
    id:2,
    adi: "Emine",
    gender:"f",
    bolum:"ogretmen",
    age:27,
    baslamaTarihi:2001,
    bitisTarihi:2016,
   

},

{
    id:3,
    adi: "Amine",
    gender:"f",
    bolum:"entwickler",
    age:37,
    baslamaTarihi:2011,
    bitisTarihi:2023,
   

},

{
    id:4,
    adi: "Kerim",
    gender:"m",
    bolum:"ogretmen",
    age:47,
    baslamaTarihi:2000,
    bitisTarihi:2016,
   

},
];

//! find() methodu
const foundStudent = students.find((student)=>{
    // return student.adi =="Emine"
    return student.gender=="m";  // birkac tane m var ama ilk buldugu objeyi dondurur.id leri bulurken unique oldugu icin orda cok kullanilir.

})

// console.log(foundStudent);

//! find methodunun yerine, manuel yazmak istersek; for icinde if kullanarak yazariz

for (let i=0; i<students.length; i++){
    if(students[i].adi == "Emine"){
        console.log(students[i]);
    }
}

// daha dinamikm bir sekilde yazm,ak istesek

const bul = (arananIsim)=>{

    for (let i=0; i<students.length; i++){
    if(students[i].adi == arananIsim){
        console.log(students[i]);
    }
}
}

console.log((bul("Kerim")));


//! find methodu yerine, bu usttekilerin daha detaylisi; iki tane argument verirsek yani yasi 37 olan gibi;

const bul2 = (prop, value)=>{

    for (let i=0; i<students.length; i++){
    
    const found = students[i][prop];
    if(found == value){
        console.log(students[i]);
        break;
    }
}
}

console.log(bul2("yasi",37));


//! butun bunlari yazmamak icin find kullaniriz