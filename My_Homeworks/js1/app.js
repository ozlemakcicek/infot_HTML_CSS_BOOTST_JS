
var students = [
  { name: "Ali",surname:"Demir", school:"I.O.O", class:"5/C" , notes: [50,60,50] },
  { name: "Ayse",surname:"Yildiz", school:"I.O.O", class:"5/C" , notes: [60,65,70] },
  { name: "Veli",surname:"Budak", school:"I.O.O", class:"5/C" , notes: [40,60,50] },
  { name: "Serap",surname:"Demir", school:"I.O.O", class:"5/C" , notes: [50,50,50] },
  { name: "Meltem",surname:"Emir", school:"I.O.O", class:"5/C" , notes: [70,80,90] },
];


// 1. Fonksiyon 
//parametre olarak gelen indis numarasina gore ilgili ogrenciyi silen bir fonksiyon olusturunuz.



function delFunc(index){

  for(var i=0; i< students.length; i++){
    if(i ===index){
      students.splice(i,1);  // i. indisdeki 1 tane elemani sil
      console.log("Ögrenci silindi");
      return;
    }
  }
  console.log("Gecersiz indis numarasi.Lutfen dogru numara giriniz");
}

delFunc(1)
console.log(students);


// 2.Fonksiyon
//Ogrencilerin notlarinin ortalamasini bulan ve 60  ve ustu ogrenciler gecti digerleri kaldi olarak yazdiran fonsiyon olusturunuz.




// 3. Fonksiyon
// Fonksiyona parametre olarak gelen indis numarasina gore ilgili ogrencini adina ulasip degistiren bir foksiyon olusturunuz.

function adDegistir(index, newName){

  for(var i=0; i< students.length; i++){
    if(i===index){
      students[i].name=newName;
      console.log("Ögrenci adi degistirildi");
      return;
    }
    
  }

  console.log("Gecersiz indis numarasi girdiniz.Lutfen gecerli bir numara giriniz");
}

adDegistir(3,"Ozlem")