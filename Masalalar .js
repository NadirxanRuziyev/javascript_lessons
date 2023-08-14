// Amaliyot_1
let ism = prompt("ismni kiriting:"); // Ahror ismini turli ko'rinishda yozing; 1.aHroR 
let bir_harf = ism.charAt().toUpperCase();
let qolgan_qism = ism.slice(1).toLowerCase();
const alltext =bir_harf+qolgan_qism;
console.log(alltext); // Natija:Ahror

// Amaliyo_2
// 1-misol
let myName = prompt("ismingizni kiriting:"),
    age = +prompt("Yoshingizni kiriting:");
console.log(`Assalomu aleykum ${myName}👨‍🎓
Sizning yilingiz ${2023- age}
Yashagan oyingiz: ${age*12}
Yashagan Hafta: ${(age*12)*4+3}
Yashagan kun: ${age*365}
Yashagan soat: ${age*365*24}
Yashagan daqiqa: ${age*365*24*60}
Yashagan sekunt: ${age*365*24*60*60}
`);

// 2-misol

