"use script"
// //   ------------------   Data (ma'lumot ) turlari.---------------------------------- \\ \\


 // // //====>>  String  va uning methodlari . priminitf tur
// const ism ="Nodir",
//     familya ='Ruziyev',       
//     soha =`Dasturlash`;
// console.log(ism,familya,soha);

// // // methodlar va propertilat <--
// console.log(ism.length); // qiymat uzunligini aniqlash  . properti
// console.log(ism.toUpperCase());    // NODIR
// console.log(familya.toLowerCase());    //ruziyev
// console.log(soha.indexOf("u"));   // 4 -> turgan o'rning raqami
// console.log(soha.lastIndexOf('a'));   // 7-> oxiridan qarab indexni chiqaradi
// console.log(ism.slice(0,3));   // Belgilangan indexgacha kesib o'zlashtirish;  => Nod
// console.log(familya.substring(1,5));   // slice kabi ishlaydi.
// console.log(familya.replace('u',"o'"));   // berilgan qiymatni o'zgartirish ==> Ro'ziyev
// console.log(soha.charAt());   // birinchi qiymatni olish
// console.log(familya.trim());   // oxiridan va boshidan bo'sh joylarni o'chiradi -> '  a  ' => 'a'
// console.log(ism.split(""));   // Har bir harfni massivga aylantiradi


// // //====>>  Number . priminitf tur
// let yosh = 18; 
// const tugulganYil = 2005;
// console.log(yosh,tugulganYil);

// // matematik operatorlar <--
// let a = 10;
// let b = 3;
// console.log(a+b); // qo'shish => a+b = 13
// console.log(a-b); // ayirish => a-b = 7
// console.log(a*b); // ko'paytirish => a*b = 30
// console.log(a/b); // bo'lish => a/b = 3.33333
// console.log(a%b); // qoldiqni olish => 10 % 3 = 1
// console.log(a**b);// darajaga ko'tarish => 10**3 = 1000

// // Math kutubxonasi <--
// console.log(Math.ceil(25.2656)); // katta songa yaxlitlash => 26
// console.log(Math.floor(25.6656)); // Kichik songa yaxlitlash => 25
// console.log(Math.round(25.3656)); // standart yaxlitlash => 25
// console.log(Math.random()); // 0 va 1 orasidan tahminiy sonni so'rash
// console.log(Math.ceil(Math.random() * 100)); // 0 dan 100gach sonlardan istalgan qiymatni so'rash
// console.log(Math.abs(-12)); // modul amali
// console.log(Math.pow(2,5)); // Darajaga ko'tarish => 2**5 = 32
// console.log(Math.sqrt(81)); // ildiz ositiga olish => 81**0.5 = 9

// // //====>> Boolean => true /false . priminitf tir
// let erkak = true // Rost / Ha       
// const ayol = false // Yolg'on /yo'q
// console.log(erkak,ayol);

// // boolean method <==
// let ism = 'Nodir';
// console.log(ism.includes('o')); // matinni ichidagi element bor bo'lsa 'true' /aks holda 'false'

// // mantiqiy Taqqoslash operqtorlari <==
// let a = 10, b=12;
// console.log(a = b); // '=' - o'zlashtiruvchi operator a ->b ni o'zlashtirib oldi.
// console.log(a==b); // noqatiy tenglik . ikki sonni tengligini tecshiradi Tipi Ahamiyatga ega emas.\false
// console.log(a=='10'); // noqatiy tenglik . ikki sonni tengligini tecshiradi Tipi Ahamiyatga ega emas.\true
// console.log(a === b); // qatiy tenglik . Tipi ahamiyatga ega.\false
// console.log(a === '10'); // qatiy tenglik . Tipi ahamiyatga ega.\false
// console.log(a > b); // a katta b dan tekshirish \false
// console.log(a >= b); // katta yoki teng \false
// console.log(a < b); // a kichik b dan tekshirish \true
// console.log(a <= b); // kichik yoki teng \true


// // // ====> Null => nomalum o'zgaruvchi  'Matematik jihatdan 0 ga teng .priminitf tur
// const javob = 5;
// console.log(savol);

// // //====> Undifined => qiymatsiz o'zgaruvchi .priminitf tur
// let ism;
// console.log(ism);

// // //====> object =>  referens tur
// const massiv = ['Nodir','Ruziyev'];
// const arrey ={
//         'Nodir':'Ruziyev',
//         "Baxrom":'Mahmudov',
// }
// console.log(typeof massiv );
// console.log(typeof arrey );

// ==============================================================================================//

// // // ====> Array ->massiv bilan ishlash <-
// const num = [1,2,3,4,5,6];
// const text = ['N','o','d','i','r'];
// // const allItem = [ 1 ,'salom' , true , [] , {}];
// console.log(num); // Sonli array 
// console.log(text); // harfli Array
// console.log(allItem); // Barcha tipdagi array

// // method <==
// console.log(num.includes(6)); // element bor bo'lsa boolean qiymat qaytaradi 
// console.log(num.length); // Massiv uzunligini aniqlash.
// console.log(text.indexOf('i')); // TUrdan indexni aniqlash
// console.log(text.concat(num)); // massivlarni bir biriga qo'shish qo'shish.
// console.log(num.pop()); //  massivdan  oxirgi elementni kesib olish
// console.log(num.push(7));  //  massivning oxiriga element qo'shish
// console.log(text.unshift('B')); // massiv boshiga element qo'shish
// console.log(text.shift()); // Massiv boshidan elementni qirqib olish.

// // // ====>> For loops -tsikl;
// -----------------------------------------------------------------
// for(let i =0 ; i < 6 ; i++){          // for(boshi; davomiyligi; qadami){}
//    // takrorlanishi kerak bo'lgan kontent
// }

// -----------------------------------------------------------------
// for(let key of array){               
//     // Takrorlanishi kerak bo'lgan massivlar elementlari uchun amal
// }

// -----------------------------------------------------------------
//  for(let key in objekt){
//   // Takrorlanishi kerak bo'lgan objeck elementlari uchun amal
// }
    
// -----------------------------------------------------------------
// let i = 0; //qadam boshi
// while(Shart){
//     //takrorlanishi kerak bo'lgan amallar
//     i++  // qadanmar uzunligi
// }

// -----------------------------------------------------------------
// let i = 0; //qadam boshi
// do{
//     //takrorlanishi kerak bo'lgan amallar
//     i++  // qadanmar uzunligi
// }while(Shart)

// // // ====> shart operatorlar if ,else if , else va switch.
// if(shart){  
//     // Amallar
// }else if(shart_2){
//     // Amallar_2
// }else{
//    // oxirgi amal
// }


// // // switch <=--
// switch(verible){
//     case value1;
//       // Bajarilishi kerak bo'lgan amal
//       break
//     case value2;
//       // Bajarilishi kerak bo'lgan amal
//       break
//     case value3;
//       // Bajarilishi kerak bo'lgan amal
//       break
//     default:
//         // Oxirgi imkonziya bo'lmaganda chiqadigan qiymat.
// }


// let a = 10;


