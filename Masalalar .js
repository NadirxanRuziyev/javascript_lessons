// // Amaliyot_1 ---------------------------------------------------------------
// let ism = prompt("ismni kiriting:"); // Ahror ismini turli ko'rinishda yozing; 1.aHroR 
// let bir_harf = ism.charAt().toUpperCase();
// let qolgan_qism = ism.slice(1).toLowerCase();
// const alltext =bir_harf+qolgan_qism;
// console.log(alltext); // Natija:Ahror

// // Amaliyo_2----------------------------------------------------------------
// // 1-misol
// let myName = prompt("ismingizni kiriting:"),
//     age = +prompt("Yoshingizni kiriting:");
// console.log(`Assalomu aleykum ${myName}
// Sizning yilingiz ${2023- age}
// Yashagan oyingiz: ${age*12}
// Yashagan Hafta: ${(age*12)*4+3}
// Yashagan kun: ${age*365}
// Yashagan soat: ${age*365*24}
// Yashagan daqiqa: ${age*365*24*60}
// Yashagan sekunt: ${age*365*24*60*60}
// `);

// // 2-misol
// const he_name = prompt("Sizga kim kerak");
// const names = ['nodir','baxrom','ahmadjon','diyor'];
// if(names.includes(he_name.toLowerCase())){
//     console.log('Bunday ism mavjud');
// }else{
//     console.log("Bunday ism mavjud emas:");
// }

// // 3-misol
// const ism = ['Baxrom','Nadir','Ahmad'];
// // 1-usul
// ism.forEach((a)=>{
//     if(a =='Ahmad'){
//         console.log(a + "jan");
//     }else{
//         console.log(a + "xon");
//     }
// });

// // 2-usul
// for(let a of ism){
//     let nextName = a =="Ahmad" ? a + "jan":a + "xon";
//     console.log(nextName);
// }

// // 3-usul
// for(let i = 0; i < ism.length ; i++ ){
//     let nextName = ism[i] =='Ahmad'? ism[i] + 'jon':ism[i] + 'xan';
//     console.log(nextName); 
// }

// // 4-usul
// let i =0;
// while(i < ism.length){
//     let nextName = (ism[i] == 'Ahmad') ? ism[i] + "jon":ism[i] + "xon";
//     console.log(nextName);
//     i++
// }

// // 5-usul
// let i =0;
// do{
//     let nextName = ism[i] == 'Ahmad' ? ism[i] + "jon":ism[i] + "xan";
//     console.log(nextName);
//     i++
// }while(i < ism.length)

// // 4-misol
// let viloyat = prompt('Viloyat nomini kiriting:');
// let viloyatLower = viloyat.toLowerCase()
// switch(viloyatLower){
//     case 'samarqand':
//         console.log("Samarqand aholi soni : 2005 ta");
//         break
//     case 'buxoro':
//         console.log("Buxoro aholi soni : 2500 ta");
//         break
//     case 'toshkent':
//         console.log("Toshkent aholi soni : 2700 ta"); 
//         break   
//     default:
//         console.log("Bu viloyat haqida ma'lumotga ega emasmiz");
// }

// // 5-misol 
// const p = prompt(' Pasport raqamingizni kiriting :');
// if(p.length > 5){
//     alert(`siz belgilangan belgidan ${p.length-5}taga oshdingiz
//     yozgan belgilaringiz soni ${p.length} `);
// }else{
//     alert(`Siz belgilangan miqdordan ${5-p.length} taga kam yozdingiz
//     yozgan belgilaringiz soni ${p.length}`);
// }

