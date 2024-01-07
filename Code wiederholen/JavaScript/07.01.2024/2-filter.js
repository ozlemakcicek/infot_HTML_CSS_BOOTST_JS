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

//! filter yeni bir array dondurur.return var yani.

const bulunanlar = students.filter((item)=>{
    // return item.gender == "m";
    return item.adi=="Amine"
   
}

) 
 console.log(bulunanlar);
//console.log(bulunanlar[0]);  // bikac tane varsa


//! filter i manuel yazmak istersek;

const customFilter=(prop, value)=> {
    const results = [];

      for (let i=0; i<students.length; i++){
    
    const found = students[i][prop];
    if(found == value){
       results.push(students[i])
        
    }
}
return results
}

console.log(customFilter("gender", "f"));