// interface는 컴파일 후 사라짐
// 컴파일 타임에만 필요하고 컴파일 시 인터페이스를 이용해 타입체크
interface IPerson {
  name: string;
  age: number;
}

function hello1(person: IPerson): void {
  console.log(`hi, ${person.name}, ${person.age}`);
}

const p1: IPerson = {
  name: "mark",
  age: 25
};

hello1(p1);

// optional property
interface Animal {
  kind: string;
  leg: number;
  name?: string;
}

function dog(animal: Animal): void {
  console.log(`hi i am ${animal.kind} and i have ${animal.leg} legs`);
}

dog({ kind: "dog", leg: 4, name: "BboBbi" });

//indexable type을 이용해서 해당 인터페이스를 타이핑한 객체에
//프로퍼티를 계속 추가해줄 수 있겠구나!
interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; //indexable type
}

function hello3(person: Person3): void {
  console.log(`hi ${person.name}.`);
}

const p3: Person3 = {
  name: "mark",
  age: 25
};

const p32: Person3 = {
  name: "anna",
  bro: ["dh", "kh"]
};

const p33: Person3 = {
  name: "dong",
  father: p3,
  mother: p32
};

//interface에 function을 정의하자

interface Person4 {
  name: string;
  age?: number;
  hello(): void;
}

const p41: Person4 = {
  name: "jisung",
  age: 32,
  hello: function (): void {
    console.log(`hi~ ${this.name}`);
  }
};

const p42: Person4 = {
  name: "jisung",
  age: 32,
  hello(this: Person4): void {
    console.log(`hi~ ${this.name}`);
  }
};

/*
const p43: Person4 = {
  name: "jisung",
  age: 32,
  hello: (): void => {
    console.log(`hi~ ${this.name}`);
  } //arraow function 에서는 this를 사용할 수 없다. (a.f 안에서 this는 global 객체)
};
*/

p41.hello();
p42.hello();

//interface를 이용해 클래스 구현하기

interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`hi I am ${this.name}`);
  }
}

const p: IPerson1 = new Person("mark");

//interface extends
interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const korean: IKorean = {
  name: "mark",
  city: "seoul",
  age: 25
};

console.log(`korean: ${korean.city}`);

//function interface
interface HelloPerson {
  (name: string, age?: number): void;
}

// helloPerson은 실제 구현체와의 관계보다는 타이핑된 HelloPerson 인터페이스의 관계를 중요시 한다.
const helloPerson: HelloPerson = function (name: string) {
  console.log(`hi! I am ${name}`);
};

helloPerson("mark");

//ReadOnly

interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "mark",
  gender: "F"
};

// error: gender property는 readonly 이다.
//p81.gender = "f";

//Merging Interface
interface Merging {
  a: string;
}
interface Merging {
  b: string;
}
let mi: Merging;
mi.a = "a";
ab.b = "b";
