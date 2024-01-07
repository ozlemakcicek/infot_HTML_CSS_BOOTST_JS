//! ARRAYS

// icderisinde her turlu veri tipi vardir
[1,2,3, "ali", "veli", true, [5,6,7],  {adi:"osman"}]



//! array lerin hangi methodlari var bunu gormek icin ;
//![].  yazarsan hepsini gosterir.


const students=[
    {
    id:1,
    adi: "Murat",
    gender:"m",
    bolum:"mimarlik",
    age:21,
    baslamaTarihi:2010,
    bitisTarihi:2014,
    adress: {
        sehir: "Izmir",
        //objelerde ozel karakterler kullanilmaz property isminde ama string ifade icinde yazarsan olur
        //! "sehir-ismi":"Izmir"
        //! ama buna ulasmak icin farkli yazariz.  console.log( students[0].adress["sehir-ismi"] )seklinde yazariz.
        semt:"Bornova"
    }

},

{
    id:2,
    adi: "Mehmet",
    gender:"m",
    bolum:"muhendis",
    age:24,
    baslamaTarihi:2000,
    bitisTarihi:2016,
   

},
];

console.log(students[0].adress.sehir);
 //console.log( students[0].adress["sehir-ismi"])

