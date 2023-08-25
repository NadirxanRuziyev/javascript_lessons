'use strict'
// // Amaliyot_1 ---------------------------------------------------------------
// let ism = prompt("ismni kiriting:"); // Ahror ismini turli ko'rinishda yozing; 1.aHroR 
// let bir_harf = ism.charAt().toUpperCase();
// let qolgan_qism = ism.slice(1).toLowerCase();
// const alltext =bir_harf+qolgan_qism;
// console.log(alltext); // Natija:Ahror

// // Amaliyo_2----------------------------------------------------------------
// // 1-masala
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

// // 2-masala
// const he_name = prompt("Sizga kim kerak");
// const names = ['nodir','baxrom','ahmadjon','diyor'];
// if(names.includes(he_name.toLowerCase())){
//     console.log('Bunday ism mavjud');
// }else{
//     console.log("Bunday ism mavjud emas:");
// }

// // 3-masala
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

// // 4-masala
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

// // 5-masala 
// const p = prompt(' Pasport raqamingizni kiriting :');
// if(p.length > 5){
//     alert(`siz belgilangan belgidan ${p.length-5}taga oshdingiz
//     yozgan belgilaringiz soni ${p.length} `);
// }else{
//     alert(`Siz belgilangan miqdordan ${5-p.length} taga kam yozdingiz
//     yozgan belgilaringiz soni ${p.length}`);
// }

// // Amaliyo_3----------------------------------------------------------------
// //1-masala
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

// // 2-masala
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


// // 3-masala
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

// // 4-masala
// const checkdata = [null, 'false' , 0 , 99 , false , undefined, '',NaN, '0'];
// const newfalse = [];
// checkdata.forEach((item)=>{
//     if(!item){
//         newfalse.push(item);
//     };
// })
// console.log(newfalse);

// // 5-masala
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

// // 6-masala
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

// // 7-masala 
// const num = [20,40,20.2,40.2,50,5.5,Infinity,"Nodir","Jasur"];
// let sum = 0;

// num.forEach((item)=>{
//     if(item >= 0 && Math.floor(item) === item && item != Infinity && typeof item == 'number'){
//         sum +=item
//     }
// })
// console.log(sum);

// // 8-masala
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

// // 9-masala 
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

// // 10 - masala
// // 1- usul
//  const textLength = prompt();
//  const newtext = textLength.split('');
//  let count = 0;
//  newtext.forEach(()=>{
//     count++
//  })
//  console.log(count);

// // 2-usul
// const textLength = prompt();
// let count = 0;
// let a = 1;
// for (let i =0 ; i < a ;i++){
//     if(typeof textLength[i] !== "undefined"){
//         count++
//         a++
//     }
// }
// console.log(count);

// // 3-usul
// const text = 'Uzbekistan';
// console.log(text.indexOf(text.slice(-1))+1);

// // 11 - masala
// // 1-usul
// const numMassiv = [1,2,3,4,5];
// const newMassiv = [];
// numMassiv.forEach((item, index)=>{
//      newMassiv.push(item + index);
// })
// console.log(newMassiv )

// // 2 - usul
// const numMassiv = [1,2,3,4,5];
// const newMassiv = [];
// for(let i = 0 ; i < numMassiv.length ; i++){
//     newMassiv.push(numMassiv[i] + i);
// };
// console.log(newMassiv);

// // 12 - masala
// // 1 - usul
// const number = +prompt();
// let text = ''
// let summ = 0;
// for(let i = 1 ; i <= number ;i++ ){
//     summ += i
//     text +=`${i}+`
// };
// console.log(`${text.slice(0,text.length-1)} = ${summ}`);

// // 2 - usul
// let i = 1, summ = 0, text='';   
// const number = + prompt() 
// while(i<=number){
//     summ += i
//     text +=`${i}+`
//     i++
// }
// console.log(`${text.slice(0,text.length-1)} = ${summ}`);

// // 13 - masala
// // 1-usul
// const num = +prompt();
// const numMas = [];
// for(let i = 1 ; i <= 10 ; i++){
//     numMas.push(num*i +1 )
// }
// console.log(numMas);

// // 2- usul
// const num = +prompt();
// const numMas = [];
// let i = 1;
// do{
//     numMas.push(num*i +1 );
//     i++
// }while( i<=10);
// console.log(numMas);

// // 14 - masala
const num = [-1,2,'Nodir',-3,4,-5,6,-7]
const num2 = [-1,-2,-3,true,'Ruziyev',4,5,6,7]
function qaramaRaqam(arr){
    arr.forEach((item,idx) => {
        if(typeof item == "number"){
          arr[idx] = item * (-1)
        }
    })
    console.log(arr);
}

// qaramaRaqam(num)
// qaramaRaqam(num2)
