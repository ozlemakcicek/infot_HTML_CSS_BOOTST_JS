
// sira ile yazar normalde synchron yapi asagidaki gibi
// console.log("Adim 1");
// console.log("Adim 2");
// console.log("Adim 3");

// asagida 3 tane yazdirma durumu var.normalde siralamaya gore giderdi ama setTimeout ile yazinca bunu synchron dan asyncron yapiya donduruyoruz.hicbir sart olmayan adim 1 once yazdirilir sonra suresi kisa olan sonra uzun olan gelir
setTimeout(function name(){
    console.log("Kullaniciadi ve sifresi kontrol ediliyor");
}, 2000)


console.log("Adim 1");


setTimeout(function isPass(){
    console.log("Kullaniciadi ve sifresi dogru bilgiler cekiliyor");
}, 4000)

