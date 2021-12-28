"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//基本類型
let aa = "aa";
let str;
str = "hello";
let num = 1000;
let bool = true;
let n = null;
let un = undefined;
let an = true;
//陣列
let arr = ["a", "s"];
let arr2 = [["a", "s"]];
//元組
let tuple = [1, "a", false];
let tuple2 = [[1, "a"]];
//enum枚舉
var liveStatus;
(function (liveStatus) {
    liveStatus[liveStatus["success"] = 0] = "success";
    liveStatus[liveStatus["fail"] = -1] = "fail";
    liveStatus[liveStatus["streaming"] = 1] = "streaming";
})(liveStatus || (liveStatus = {}));
let s = liveStatus.success;
console.log(s);
//union  限定型別
let aaa;
aaa = 1000;
aaa = "str";
let al;
al = 999;
al = "str";
let bl;
bl = true;
let user1 = {
    name: "chen",
    age: 88,
    address: "taipei"
};
let obj1 = {
    name: "wow",
    dis: "ssr"
};
// console.log(obj1);
//function
function hello(a, b) {
    return a + b;
}
// hello("l","kk")  報錯
function hello2(a, b) {
    // return a + b  錯誤，只能return 數字
    return 555;
}
//undefined
function hello3(name, age) {
    return age; //age可填可不填  型別為number或undefined
}
//箭頭函式
const func = () => { };
const func2 = () => {
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json(); //因為有時你不會知道API的資料類型，所以用固定的類型來設定API
        // console.log(data);
    });
}
// getData()
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
//假設data1是動態的，先unknown類型，再希望的類型Beta
const beta = data1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS10eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzEtdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsTUFBTTtBQUNOLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQTtBQUNyQixJQUFJLEdBQVcsQ0FBQTtBQUNmLEdBQUcsR0FBRyxPQUFPLENBQUE7QUFFYixJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUE7QUFDdEIsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFBO0FBQ3hCLElBQUksQ0FBQyxHQUFTLElBQUksQ0FBQTtBQUNsQixJQUFJLEVBQUUsR0FBYyxTQUFTLENBQUE7QUFDN0IsSUFBSSxFQUFFLEdBQVEsSUFBSSxDQUFBO0FBRWxCLElBQUk7QUFDSixJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUM5QixJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFbkMsSUFBSTtBQUNKLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDdEQsSUFBSSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUUzQyxRQUFRO0FBQ1IsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQTtBQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWYsYUFBYTtBQUNiLElBQUksR0FBb0IsQ0FBQTtBQUN4QixHQUFHLEdBQUcsSUFBSSxDQUFBO0FBQ1YsR0FBRyxHQUFHLEtBQUssQ0FBQTtBQU1YLElBQUksRUFBSyxDQUFBO0FBQ1QsRUFBRSxHQUFHLEdBQUcsQ0FBQTtBQUNSLEVBQUUsR0FBRyxLQUFLLENBQUE7QUFFVixJQUFJLEVBQUssQ0FBQTtBQUNULEVBQUUsR0FBRyxJQUFJLENBQUE7QUFhVCxJQUFJLEtBQUssR0FBUztJQUNkLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEVBQUU7SUFDUCxPQUFPLEVBQUUsUUFBUTtDQUNwQixDQUFBO0FBUUQsSUFBSSxJQUFJLEdBQVM7SUFDYixJQUFJLEVBQUUsS0FBSztJQUNYLEdBQUcsRUFBRSxLQUFLO0NBQ2IsQ0FBQTtBQUVELHFCQUFxQjtBQUdyQixVQUFVO0FBQ1YsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUM7QUFDRCxzQkFBc0I7QUFFdEIsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDaEMsK0JBQStCO0lBQy9CLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQztBQUVELFdBQVc7QUFDWCxTQUFTLE1BQU0sQ0FBQyxJQUFZLEVBQUUsR0FBWTtJQUN0QyxPQUFPLEdBQUcsQ0FBQSxDQUFJLCtCQUErQjtBQUNqRCxDQUFDO0FBRUQsTUFBTTtBQUNOLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUN0QixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7SUFDZixPQUFPLENBQUMsQ0FBQTtBQUNaLENBQUMsQ0FBQTtBQVVELFNBQWUsT0FBTzs7UUFDbEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUN2RSxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQVUsQ0FBQSxDQUFHLGtDQUFrQztRQUMxRSxxQkFBcUI7SUFDekIsQ0FBQztDQUFBO0FBQ0QsWUFBWTtBQUVaLE1BQU0sS0FBSyxHQUFTO0lBQ2hCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsSUFBSSxFQUFFLENBQUM7SUFDUCxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFdBQVcsRUFBRSxLQUFLO0NBQ3JCLENBQUE7QUFNRCxtQ0FBbUM7QUFDbkMsTUFBTSxJQUFJLEdBQUcsS0FBd0IsQ0FBQSJ9