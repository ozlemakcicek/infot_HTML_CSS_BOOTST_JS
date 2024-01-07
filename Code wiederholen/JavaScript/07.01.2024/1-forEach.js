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

//normal function
function abs (){}


//arrow function
const asd =() =>{
    return 1;
}



//forEach methodu for dongusunun kolaylastirilmis halidir.bazen for bazen forEach mantikli oluyor
//! forEach de herhangibir return etme isi yok!
// forEach 3 tane parametre alir.ama 1.si olan item en onemlisidir.digerleri optional
students.forEach((item, index, arr)=>{

    // console.log(item);
    console.log(item.adi);
    //console.log(index);  // optional
    //console.log(arr);  // optional

})


// su sekilde de yazilir
[1,2,"a", true, {}].forEach((i)=>{

    console.log(i);
})