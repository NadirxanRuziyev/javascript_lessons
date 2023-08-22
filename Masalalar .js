'use strict'
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

// // Amaliyo_3----------------------------------------------------------------
// //1-misol
// //1-usul
// const array = [[false , true] , [ 1 , 2] , 99 , 'yaxshi' ];
// for(let i= 0; i < array.length ;i++){
//     if(typeof array[i] == 'string'){
//         alert(`qiymat : ${array[i]}   index:${i}`)
//     };
// }

// // 2-usul
// array.forEach((item,index)=>{
//     if(typeof item == 'string'){
//         console.log(index);
//     }
// })

// // 3- usul
// for(let  key of array){
//     if(typeof key == 'string'){
//         console.log(array.indexOf(key));
//     }
// }

// // 2-misol
// // 1-usul
// const data = [[1,2,3] ,'qizil' , [4,5,6] ,true,false];
// let numdata = []
// for(let key of data){
//     if(Array.isArray(key)){
//         numdata.push(key)
//     }
// }
// numdata = numdata[0].concat(numdata[1]);
// console.log(numdata)

// // 2-usul
// data.forEach((item)=>{
//     if(Array.isArray(item)){
//         numdata.push(item)
//      }
// })
// numdata = numdata[0].concat(numdata[1]);
// console.log(numdata)


// // 3-misol
// // 1- usul
// const array = [ [1,2,3,4,5] , [6,7,8,9],[9,8,7,6,5,4], [1,2,3,4,5,6,7,8,9]];
// const allnum = [];
// for(let i = 0 ; i < array.length;i++){
//     for(let k = 0; k < array[i].length; k++){
//         allnum.push(array[i][k]);
//     }
// }
// console.log(allnum);

// //2-usul
// const array = [ [1,2,3,4,5] , [6,7,8,9],[9,8,7,6,5,4]];
// const allnum = [];
// array.forEach((item)=>{
//      item.forEach((item)=>{
//         allnum.push(item);
//      })
// })
// console.log(allnum);

// // 4-misol
// const checkdata = [null, 'false' , 0 , 99 , false , undefined, '',NaN, '0'];
// const newfalse = [];
// checkdata.forEach((item)=>{
//     if(!item){
//         newfalse.push(item);
//     };
// })
// console.log(newfalse);

// // 5-misol
// // 1-usul
// const text = prompt();
// const massiv = text.split('');
// const revers =[]
// massiv.forEach((item)=>{
//     revers.unshift(item);
// })
// console.log(revers.join(''));

// // 2-usul
// const text = "Nodir";
// let revers ='';
// for(let i=0 ; i<text.length;i++){       //0 1 2 3 4
//     revers+=text[(text.length-1)-i]  // 4 3 2 1 0
// }
// console.log(revers)

// // 3 - usul
// const text = 'Nodir';
// let revtext = '';
// for(let i =text.length - 1; i>=0 ; i--){
//     revtext +=text[i];
// }
// console.log(revtext);

// //4-usul
// const text = 'Nodir';
// const arrtext = text.split('').reverse();
// const revtext = arrtext.join('');
// console.log(revtext);

// // 6-misol
// let Word = 'AssALOmu aLeyKUm YaxshiMisiZ';
// let wordMas = Word.split(' ');
// let javob =[];
// let correct ='';
// wordMas.forEach((item)=>{
//     javob.push(item[0].toLowerCase() + item.slice(1).toUpperCase());
// })
// javob.forEach((item)=>{
//     correct +=item +' '
// })
// console.log(correct.trim());    

// // 7-misol 
// const num = [20,40,20.2,40.2,50,5.5,Infinity,"Nodir","Jasur"];
// let sum = 0;

// num.forEach((item)=>{
//     if(item >= 0 && Math.floor(item) === item && item != Infinity && typeof item == 'number'){
//         sum +=item
//     }
// })
// console.log(sum);

// // 8-misol
// // 1-usul
// let text = prompt('text;');
// const newtext = text.toLowerCase().split('a');
// console.log(newtext.join(''));

// // 2-usul
// let text = prompt().toLocaleLowerCase();
// let newtext =''
// for(let i =0 ; i < text.length ; i++){
//     if(text[i] !== 'a'){
//         newtext +=text[i]
//     }
// }
// console.log(newtext);

// // 9-misol 
// // 1-usul
// const mass = [ 'mun' ,21 ];
// const newmass =[];
// mass.forEach((item)=>{
//     newmass.push(typeof item)
// })
// console.log(newmass);

// // 2-usul
// const massiv = [ 1 , {} , [] ,'Nodir' , null , true];
// const newmas = [];
// for(let key of massiv){
//     newmas.push(typeof key);
// }
// console.log(newmas);