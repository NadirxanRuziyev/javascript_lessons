"use strict"
// let seriesDB = {
//     count:10, 
//     series:{},
//     actors:{count:0 },
//     genres:[],
//     privat:false,
//     startApp: ()=>{
//         seriesDB.count  = +prompt("Nechta o'yin ko'rdingiz ?");
//         while(seriesDB.count =='' || seriesDB.count == null || isNaN(seriesDB.count)){
//             seriesDB.count  = +prompt("Nechta o'yin ko'rdingiz ?");
//         }
//         console.log(seriesDB.count);
//     },
//     rememberMySeries:()=>{
//         for(let i = 0; i < 2;){
//             let savol_1 = prompt("Oxirgi ko'rgan serialingiz:"),
//                 baho = +prompt("Necha baho berasiz:");
//             if(savol_1 != "" && savol_1 != null && baho != '' && baho !=null){
//                 seriesDB.series[savol_1] = baho;
//                 i++
//             }
//         }
//         console.log(seriesDB.series);
//     },
//     tajriba:()=>{
//         let javob;
//         if(seriesDB.count > 10){
//             javob = "Siz seryalchi zvezda ekansiz.";
//         }else if(seriesDB.count > 5){
//             javob = "Siz classik tomoshabin ekansiz.";
//         }else{
//             javob = "Siz kam serial ko'ribsiz";
//         };
//         console.log(javob);
//     },
//     malumot:()=>{
//         if(!seriesDB.privat){
//             console.log(seriesDB);
//         }
//     },
//     writeGenres:()=>{
//         for(let i=0 ; i<3; i++){
//             let question = prompt(`yaxshi Korgan janiringiz ${i+1} =>`);
//             while(question == '' || question == null){
//                 question = prompt(`yaxshi Korgan janiringiz:${i+1}`);
//             }  
//             seriesDB.genres[i] = question;
//         }
//         console.log(seriesDB.genres);
//     },
// };


// // // // Callback function -----------------------------------------------------------------------------------------------
// function salomlash(myName,javob){
//     console.log(`Assalomu aleykum  ${myName}` );
//     javob("Jasur");
// }
// salomlash("Nodir" ,(youname)=>{
//     console.log(`Va aleykum assalom ${youname} `);
// } )

// // // //  object bn ishlash  -------------------------------------------------------------------------------------------

// const thear = {
//     jacket:"black",
//     height:1.7,
//     color:{
//         hear:"red",
//         item:{
//             bit:1024,
//             gm : 214,
//             nodir:'ruziyev',
//         },
//         style:'blue',
//         salom:"valeykum"
//     }
// }


// const {bit,gm,nodir} =thear.color.item;
// console.log(bit,gm,nodir);

// const {salom,hear,style} =thear.color;
// console.log(salom);
// console.log( hear);
// console.log( style);

// console.log( thear.jacket);
// console.log(Object.keys(thear.color.item));
// for (let key in thear){
//     if(typeof thear[key] ==="object"){
//         for(let i in thear[key])[
//             console.log(`Kalit qiymat ${key} : value ${thear[key][i]} `)
//         ]
//     }else{
//       console.log(`Kalit qiymat ${key} : value ${thear[key]} `);
//     }
// }

// thear.color["salom"] = "valeykum";
// console.log(thear.color.hear);

// // // //  massiv elementlari  ----------------------------------------------------------------------------------------------

// const num = [15,256,3,654,785,614,147,178];
// num.sort((a,b)=> a-b);
// console.log(num);

// function callback(a,b){
//     return a-b;
// };
// num.pop();
// num.push(9);

// num.shift();
// num.unshift(0)
// console.log(num);

// for (let i=0; i < num.length; i++){
//     console.log(num[i])
// }
// for(let i of num){
//     console.log(i);
// }


// num.forEach(function(item,index,num){
//     console.log(`${index} => ${item} ro'yxatdan =>> ${num}`);
// });


// const splitText = prompt("Assalomu =>> ");
// const textSplit = splitText.split("");
// console.log(textSplit.join("- ").split("- "));

// // // //  clonlash ----------------------------------------------------------------------------------------
// const num = {
//     x:10,
//     y:5,
// }
// function numObj(obj){
//     const objectnum = {};
//     for(let key in obj){
//         objectnum[key] = obj[key];
//     }
//     return objectnum
// }
// const newnum = numObj(num);
// newnum.x = 30;
// console.log(newnum);
// console.log(num);


// // // // Object.assign objectlarni qo'shish -----------------------------------------------------------------------------

// const firstnum = {
//     x:1,
//     y:2,
// }
// const secandnum = {
//     z:7,
// }
// const  allNum = Object.assign(firstnum,secandnum);
// console.log(allNum);
// allNum.x = 10;
// console.log(allNum);


// // // //  Listdan nusxa olish ------------------------------------------------------------------------------------------

// const write = [1,2,3,4,5,6,7];
// const read = write.slice();
// console.log(read);
// read[0] = 10;
// console.log(read);

// // // // Spread operatori massivlarni qo'shish ----------------------------------------------------------------------------
//  const num = [1,2,3,4,5,6,7,8,9];
//  const word = ['a','s','d','f','g','h','j','k','l'];
//  const fullname = [...num,...word];
//  console.log(fullname);

// const calc = [1,2,3];
// function logger(x,y,z){
//     console.log(x + y + z);
// }
// logger(...calc)


// const objwrite = {
//     x:1,
//     y:2,
// }
// const newobj = {...objwrite};
// newobj.x = 3;
// console.log(newobj);
// console.log(objwrite);

 // // // // OOP bilan tanishish     ---------------------------------------------------------------------------------

//  const proto ={
//     color:"blue",
//     x : 10,
//     y:80,
//  }

//  let copyProto ={
//     z :40,
//  }

 // // // // First streep prototype ================
//  Object.setPrototypeOf(copyProto,proto);
 
// // // // second prototype =====================
// copyProto = Object.create(proto);
//  console.log(copyProto);

// ============================================================

// // Dinamik typeing 
// let str = '0';
// str = Number(str);
// console.log(typeof str); // Number

// let num = 123;
// num = String(num);
// console.log(typeof num); // String

// num = +num
// console.log(typeof num); // Number

// str = Boolean(str); // Boolean
// console.log(str);
// str = !!str // Boolean
// console.log(str);
// // false qiymatlar  // 0 , '' , null , indefined , NaN 

// ===================================================================
// // classList . add() , remove(), toggle() , contains() va item() => elementlar.

