var a; //定義變數型別
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "aa", 3];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var bc = Color.Blue;
// console.log(bc) //2
// let txt;//any
// txt = "abc";
// // let a = txt.endsWith("c") //error
// // let end = (<string>txt).endsWith('c');
// let end = (txt as string).endsWith('c');
// console.log(end)
