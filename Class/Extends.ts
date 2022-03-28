class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름: ${this._name}, 나이: ${this._age} 입니다.`);
  }
}

const p = new Parent("mark", 25);
p.print();

class Child extends Parent {
  //자식 생성자에선 항상 super를 먼저 호출해줘야 한다.
  constructor(name: string, age: number, private grade: string) {
    // this._name = name;
    super(name, age);
  }

  // 부모 클래스에 있는 print 메서드가 오버라이딩 됨
  print() {
    console.log("남자입니다");
  }
}

const c = new Child("dh", 25, "5학년");
c.print();
