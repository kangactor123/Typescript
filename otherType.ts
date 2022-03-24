/* array */

let list: number[] = [1, 2, 3];
// union type 으로 array value 혼합하기

let unionArray: (number | string)[] = [1, 2, 3, "array"];
//let list:Array<number> = [1,2,3];

/* tuple */
// 항상 타입도, 순서도, 길이도 동일해야함

let x:[string, number]; 

x = ["hello",123];
// x = [10, "123"]; error
// x[3] = 123; error

const person:[string, number] = ["DH", 29];
const [first, second] = person;

/* any */
// 어떤것이든 할 수 있다. (어떤 타입이여도 상관없음)
// 최대한 any를 쓰지 않는게 핵심
// 컴파일 옵션중에 any를 써야하는데 쓰지 않으면 오류가 나는 옵션도 있음
// noImplicitAny
function returnAny(msg: any): any {
  console.log(msg);
}

const any = returnAny("아무거나");

any.toString();

// any는 객체를 통해서 전파된다.
// 타입의 안정성을 잃게된다.
let loosleyTyped: any = {};
const d = loosleyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a = obj.b;
  const b = a + 1;
  return b;
}

const c = leakingAny({});



/* unknown */
/* any 의 불안정 요소를 대체하기 위해 나온 타입 */
// 이 변수가 정말 동적이기 때문에 타입이 뭔지 모르겠다.
// any의 짝보다는 any보다 Type-Safe 타입
// unknown 을 활용하면 runtime error을 줄일수 있다.

declare const maybe: unknown;

//const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}



/* never */
// 일반적으로 return 에 사용된다
// never 은 모든 타입의 subType
// 하지만 never에는 어떤 것도 할당할 수 없다.
// any 조차도 할당할 수 없다.
// 잘못된 타입을 넣는 실수를 막고자 활용

// 함수의 body부분이 끝나면 안된다.
function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// let a: string = "hello";

declare const a: string | number;

if (typeof a !== "string") {
  a; //a의 타입은 never (아무것도 할 수 없는 상태)
}

// never를 활용해서 잘못된 실수를 막는 코드 예제
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

// b 의 타입은 never 이기에 오류가 나온다.
//const b: Indexable<{}> = "";

  
  
/* void */
function returnVoid(msg: string): void {
  console.log(msg);

  return undefined;
}
// undefined가 유일하게 void에 할당할 수 있는 값

returnVoid("return 이 없다");

/* object literal type */

function objUsing(obj: { name: string; age: number }): string {
  const intro = `Hello my name is ${obj.name} and I am ${obj.age} years old`;
  return intro;
}

console.log(objUsing({ name: "donghee", age: 29 }));

  
  
/* Typescript는 structual type system 을 따르고 있다 */
// 구조가 같으면 같은 타입이다.

interface IPerson {
  name: string;
  age: number;
}

type personType = {
  name: string;
  age: number;
};

let A: IPerson = {} as any;
let B: personType = {} as any;

// 둘 다 문제없음
A = B;
B = A;

// Typescript는 Duck Typing, Nominal Type System 을 따르지 않는다.

/* nominal type system : 구조가 같아도 이름이 다르면 다른 타입이다 */
// ex) Java, C

/* Duck Typing */
// 만약 어떤 새가 오리처럼 날고, 꽥꽥거리고, 헤엄치면 난 그 새를 오리라고 부를것이다.


