const students=[

    {
    id:1,
    adi: "Mehmet",
    gender:"m",
    bolum:"muhendis",
    age:24,
    baslamaTarihi:2000,
    bitisTarihi:2036,
   

},
{
    id:2,
    adi: "Emine",
    gender:"f",
    bolum:"ogretmen",
    age:27,
    baslamaTarihi:2002,
    bitisTarihi:2016,
   

},

{
    id:3,
    adi: "Amine",
    gender:"f",
    bolum:"entwickler",
    age:37,
    baslamaTarihi:2001,
    bitisTarihi:2023,
   

},

{
    id:4,
    adi: "Kerim",
    gender:"m",
    bolum:"ogretmen",
    age:47,
    baslamaTarihi:2000,
    bitisTarihi:2026,
   

},
];

// hepsi mi diye sordurur.true false dondurur.hepsi sarta uyarsa true dondurur

const sonuc= students.every((item)=>{

    // return item.baslamaTarihi >= 2000
    return item.age >=5
})
console.log(sonuc);