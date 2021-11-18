let a:number;//定義變數型別
let b:boolean;
let c:string;
let d:any;
let e:number[] = [1,2,3];
let f:any[] = [1,true,"aa",3];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

enum Color{Red = 0,Green = 1,Blue = 2};
let bc = Color.Blue;
// console.log(bc) //2

// let txt;//any
// txt = "abc";
// // let a = txt.endsWith("c") //error
// // let end = (<string>txt).endsWith('c');
// let end = (txt as string).endsWith('c');
// console.log(end)