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

//! bir sonuc dondurur ve bunu yeni bir array yapar.return var.

const newArray= students.map((item)=>{

    //return de bir obje dondurururz burda cunku obje zaten verimiz.mesela sadece ogrenciAdi, okul tarihi gibi yeni key ler yazdik bir obje dondurduk burda
    return {
        ogrenciAdi : item.adi,
        okulTarihleri:{
            baslamaTarihi: item.baslamaTarihi,
            bitirmeTarihi: item.bitisTarihi,

        },
        kacyilOkudu: item.bitisTarihi-item.baslamaTarihi

    }
})

console.log(newArray);  
//ciktisi
// {ogrenciAdi: 'Mehmet', okulTarihleri: {…}, kacyilOkudu: 16}

// {ogrenciAdi: 'Emine', okulTarihleri: {…}, kacyilOkudu: 15}

// {ogrenciAdi: 'Amine', okulTarihleri: {…}, kacyilOkudu: 12}
 
// {ogrenciAdi: 'Kerim', okulTarihleri: {…}, kacyilOkudu: 16}




//bunun ciktisi da ustteki gibi
const yeniListe1 = students.map((item)=>{
    return{
        item,
        kacyilOkudu:item.bitisTarihi - item.baslamaTarihi
    }
})

console.log(yeniListe1);


//! bunun ... spread operatoru ile yazimi asagida ve cikti farki da asagida

const yeniListe = students.map((item)=>{
    return{
        ...item,
        kacyilOkudu:item.bitisTarihi - item.baslamaTarihi
    }
})

console.log(yeniListe);
//ciktisi
 
// {id: 1, adi: 'Mehmet', gender: 'm', bolum: 'muhendis', age: 24, …}
// 1
// : 
// {id: 2, adi: 'Emine', gender: 'f', bolum: 'ogretmen', age: 27, …}
// 2
// : 
// {id: 3, adi: 'Amine', gender: 'f', bolum: 'entwickler', age: 37, …}
// 3
// : 
// adi
// : 
// "Kerim"
// age
// : 
// 47
// baslamaTarihi
// : 
// 2000
// bitisTarihi
// : 
// 2016
// bolum
// : 
// "ogretmen"
// gender
// : 
// "m"
// id
// : 
// 4
// kacyilOkudu
// : 
// 16