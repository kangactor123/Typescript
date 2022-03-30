import { getShebang } from "typescript";

function helloBasic<T, U>(msg: T, comment: U): T {
  return msg;
}

helloBasic<string, number>("", 3);
helloBasic(23, 2); // 추론 규정으로 인해서 T는 23이 된다. Typescript의 추론 규정은 가장 좁은 범위임

/* Generic Array */
function helloArray<T>(msg: T[]): T {
  return msg[0];
}

const hi = helloArray<string>(["hello", "world"]);
console.log(hi);

helloArray(["hello", 5]);

/* Generic Tuple */
function helloTuple<T, K>(msg: [T, K]): T {
  return msg[0];
}

helloTuple(["hello", "world"]);
helloTuple(["hello", 5]);

/* Generic Function */
type HelloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: HelloFunctionGeneric2 = <T>(msg: T): T => {
  return msg;
};

/* Generic Class */
// 컴파일 타임에 자료형 체크

class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person<string, number>("mark", 25);

/* Generic extends */
// 아래 코드에서 extends를 사용한 T는 string이나 number만 사용할 수 있다.
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("mark");
new PersonExtends(25);
// new PersonExtends(true); error ( T extends string | number )

/* Generic keyOf */

interface IPerson {
  name: string;
  age: number;
}

const personMark: IPerson = {
  name: "mark",
  age: 25,
};

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
/* 
function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}
*/

// T 와 K 의 관계를 명확히 규정
// K = "name" | "age"
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(personMark, "name");

/*
function setProp(obj: IPerson, key: keyof IPerson, value: string | number): void {
  obj[key] = value;
}
*/
function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(personMark, "name", "hi");
