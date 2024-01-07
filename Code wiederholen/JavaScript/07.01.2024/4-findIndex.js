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


const index = students.findIndex((item)=>{
    return item.adi =="Emine"
});

console.log(index);  //1   bulamazsa -1 dondurur.