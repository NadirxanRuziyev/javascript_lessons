"use strict"

// let  numberOfSeries ;
// function startApp(){
//     numberOfSeries  = +prompt("Nechta o'yin ko'rdingiz ?");
//     while(numberOfSeries =='' || numberOfSeries == null || isNaN(numberOfSeries)){
//         numberOfSeries  = +prompt("Nechta o'yin ko'rdingiz ?");
//     }
// };

// startApp();

// let seriesDB = {
//     count:10, // numberOfSeries
//     series:{},
//     actors:{count:10 },//numberOfSeries
//     genres:[],
//     privat:false
// };


// function rememberMySeries(){
//     for(let i = 0; i < 2;){
//         let savol_1 = prompt("Oxirgi ko'rgan serialingiz:"),
//             baho = +prompt("Necha baho berasiz:");
//         if(savol_1 != "" && savol_1 != null && baho != '' && baho !=null){
//             seriesDB.series[savol_1] = baho;
//             i++
//         }
//     }
// }
// rememberMySeries();

// function tajriba(){
//     let javob;
//     if(seriesDB.count > 10){
//         javob = "Siz seryalchi zvezda ekansiz.";
//     }else if(seriesDB.count > 5){
//         javob = "Siz classik tomoshabin ekansiz.";
//     }else{
//         javob = "Siz kam serial ko'ribsiz";
//     };
//     console.log(javob);
// } 

// tajriba();

// function malumot(){
//    if(!seriesDB.privat){
//       console.log(seriesDB);
//    }
// }

// malumot();

// function writeGenres(){
//     for(let i=0 ; i<3; i++){
//         let question = prompt(`yaxshi Korgan janiringiz ${i+1} =>`);
//         while(question == '' || question == null){
//             question = prompt(`yaxshi Korgan janiringiz:${i+1}`);
//         }  
//         seriesDB.genres[i] = question;
//     }
//     console.log(seriesDB.genres);
// }

// writeGenres();

// // // // Callback function -----------------------------------------------------------------------------------------------

// function salom_ber(myName,collback){
//     console.log(`Assalomu aleykum ${myName}`);
//     collback();
// }

// salom_ber("Nodir", function(){
//     console.log("Valeykum assalom");
// })

// // // //  object bn ishlash  -------------------------------------------------------------------------------------------

// const thear = {
//     jacket:"black",
//     height:1.7,
//     color:{
//         hear:"red",
//         style:'blue',
//         salom:"valeykum"
//     }
// }

// const {hear , style ,salom} = thear.color;
// console.log(salom);
// console.log( hear);
// console.log( style);

// console.log( thear.jacket);
// console.log(Object.keys(thear));

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
