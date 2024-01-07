
// iki tane parametre alir digerlerinden farkli olarak.acccumulator ve item.birde baslangic degeri olarak z.B. 0 alir

const sayilar = [1,3,5,6,7,8,9,20]

const sayilarToplami = sayilar.reduce((acc, item)=>{
    return acc=acc+item

}, 0)
console.log(sayilarToplami);


//! birde kalabalik data da yapalim

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


const ogrenciYaslarininToplami= students.reduce((acc, item)=>{
     return (acc=acc+item.age)

  
   
},0)
console.log(ogrenciYaslarininToplami);
  //yas ortalama icin
  console.log(ogrenciYaslarininToplami/students.length);


  //!2- bolumlerde kac kisi okuyor?

  // burda bir obje elde edecegiz o yuzden  baslangic degeri {} bos bir obje olacak
  
  const bolumOgrenciSayiObjeleri = students.reduce((bolumler,ogrenci)=>{
    
    console.log(bolumler); // {muhendis: 1, ogretmen: 1, entwickler: 1}
    console.log("bolum-->", ogrenci.bolum);

    if (bolumler[ogrenci.bolum]){
        bolumler[ogrenci.bolum]++ // ayni bolumden olan varsa ustune eklesin birer birer

    } else{
        bolumler[ogrenci.bolum] = 1 // ayni bolumden olan yoksa onu 1 olarak saysin diye yaziyoruz bunu
    }

return bolumler
  }, {})

  console.log(bolumOgrenciSayiObjeleri); // {muhendis: 1, ogretmen: 2, entwickler: 1}


//! bunu su sekilde de yapabiliriz.
  // Bölümlere göre öğrenci sayılarını toplamak için bir obje
const bolumSayilari = {};

// Döngü ile her öğrenciyi kontrol etme
students.forEach(student => {
    const { bolum } = student;

    // Eğer bölüm daha önce eklenmemişse, 0 ile başlat
    if (!bolumSayilari[bolum]) {
        bolumSayilari[bolum] = 0;
    }

    // Bölümdeki öğrenci sayısını arttır
    bolumSayilari[bolum]++;
});

console.log(bolumSayilari); // {muhendis: 1, ogretmen: 2, entwickler: 1}

//! ya da for dongusu ile yazarsak;

const bolumSayisi={};

for(let i=0; i<students.length; i++){
    
    if(bolumSayisi[students[i].bolum]){
        bolumSayisi[students[i].bolum]++;
    }else{
        bolumSayisi[students[i].bolum] = 1;
    }
}

console.log(bolumSayisi);  // {muhendis: 1, ogretmen: 2, entwickler: 1}
