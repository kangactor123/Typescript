class Person {
  //   name: string = "Mark";
  //   age: number;
  public year!: number; //! 개발자의 의도

  //typescript에서는 오버로딩을 지원한다.
  //생성자 함수엔 async를 붙일수 없다.
  //_맴버 -> 접근 제어자 중 private
  //매개변수에 접근제어자를 붙이면 저절로 필드로 할당된다.
  public constructor(private _name: string, public age: number) {}
  public async init() {}

  //getter && setter 필드의 캡슐화
  //   public getName(): string {
  //     return this.name;
  //   }
  get name() {
    return this._name;
  }

  //   public setName(name: string) {
  //     this.name = name;
  //   }

  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const p1 = new Person("mark", 25);
// await p1.init();

console.log(p1);
console.log(p1.name);
p1.name = "DH";
console.log(p1.name);
