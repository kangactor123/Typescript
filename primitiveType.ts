//원시타입은 항상 소문자
/* boolean */

let isDone: boolean = false;
isDone = true;

let isOk: Boolean = true;

//에러
// let isNotOk: boolean = new Boolean(false);

/* number */

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let NotaNumber: number = NaN;
let underScoreNum: number = 1_000_000;

/* string */

let myName: string = "Donghee";
myName = "kang";

let fullName: string = "KangDongHee";
let age: number = 29;
let sentence: string = `Hello My name is ${fullName} and

I'm ${age} years old`;

/* Symbol */
/*
1. primitive type 을 담는데 사용
2. 고유하고 수정 불가능한 값을 만들어줌
3. 접근을 제어하는데 주로 사용 
*/
// tsconfig -> "lib" : ["ES2015", "DOM"];
console.log(Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "Value"
};

obj[sym];

/* undefined, null */
// Runtime에서 typeof null === object
// Undefined 무언가 아얘 준비가 안된 상태
// Runtime typeof undefined === undefined
let undef: undefined = undefined;
let nul: null = null;

// union Type
// let myNameis:string = null;
let v: void = undefined;
let union: string | null = null; //union
union = "Marki";
