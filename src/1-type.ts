
//--------基本類型----------
let aa: string = "aa"
let str: string
str = "hello"

let num: number = 1000
let bool: boolean = true
let n: null = null
let un: undefined = undefined
let an: any = true

//-----------陣列---------
let arr: string[] = ["a", "s"]
let arr2: string[][] = [["a", "s"]]

//--------元組-----------
let tuple: [number, string, boolean] = [1, "a", false]
let tuple2: [number, string][] = [[1, "a"]]

//----------enum枚舉-----------
enum liveStatus {
    success = 0,
    fail = -1,
    streaming = 1
}

let s = liveStatus.success
console.log(s);

//--------union--------------  限定型別
let aaa: number | string
aaa = 1000
aaa = "str"

//-----------type-------------   類似union
type a = number | string
type b = boolean | string

let al: a
al = 999
al = "str"

let bl: b
bl = true

//-------------interface------------  類似物件的union，且物件內的值(name,age)都必須帶到，否則報錯
interface user {
    name: string;
    age?: number   //加上?，可選擇填或不填
    //沒?，則必填
}

interface user {    //擴充
    address: string;
}

let user1: user = {
    name: "chen",
    age: 88,
    address: "taipei"
}

//------------object-------------  類似interface，但不可擴充
type card = {
    name: string,
    dis: string
}

let obj1: card = {
    name: "wow",
    dis: "ssr"
}

// console.log(obj1);


//-----------function----------------
function hello(a: number, b: number) {
    return a + b
}
// hello("l","kk")  報錯

function hello2(a: string, b: string): number {
    // return a + b  錯誤，只能return 數字
    return 555
}

//------------undefined----------------
function hello3(name: string, age?: number) {
    return age    //age可填可不填  型別為number或undefined
}

//-------------箭頭函式-----------------
const func = () => { }
const func2 = () => {
    return 1
}

//-----------as unknown-----------------
type Data = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data   //因為有時你不會知道API的資料類型，所以用固定的類型來設定API
    // console.log(data);
}
// getData()

const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta = {
    name: string
}

//假設data1是動態的，先unknown類型，再希望的類型Beta
const beta = data1 as unknown as Beta


//-----------------class-------------------開發時適用

//private 私有
//public 公開  (預設)
//protected 受保護

class Live {
    roomName: string
    private id: string
    protected name: string

    constructor(roomName1: string, id1: string, name1: string) {
        this.roomName = roomName1
        this.id = id1
        this.name = name1
    }
    sttw() {
        this.id  //private只能在class本身以內才可被訪問
    }
}

class carLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) {
        super(roomName1, id1, name1)
    }
    stt() {
        super.name    //private和protected差別，繼承class內protected可被訪問，private不可被訪問
    }
}
// const hh = new carLive("s", "jj", "ll")
// console.log(hh);


const live = new Live("1號", "0001", "wei")
console.log(live);   //只會出現live.roomName，live.id和dive.name會報錯
//是一個開發防錯的機制



//-----------泛型Generics ------------------要用function時，在決定類別
function print<t>(data: t) {
    console.log("data", data);

}

print<number>(555)
print<string>("fff")
print<boolean>(true)


//class
class Print<t>{
    data: t
    constructor(d: t) {
        this.data = d
    }
}

const p = new Print<number>(999)
const p1 = new Print<string>("999")
console.log("p", p);
console.log("p1", p1);
