type MyString = string;

let a: MyString = "hello";

/* union type alasing */
let temp: string | number = 0;

type StringOrNumber = string | number;

let b: StringOrNumber = "hi";
b = 0;

/* aliasing tuple */
let tuple: [number, string] = [1, "a"];

type TupleA = [number, string];

let afterTuple: TupleA = [2, "b"];
let c: TupleA = [3, "c"];

// 타입이 타입으로써 목적이 명확하다면 interface
// 그렇지 않고 다른 대상을 가르킨다거나 별명으로써만 활용되면 type alias
