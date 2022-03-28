class Animal {
  //readonly keyword를 사용 시 누군가 밖에서 해당 프로퍼티를 바꿔줄려면 에러가 나온다.
  //readonly가 달려있으면 선언부나 constructor 에서만 값을 할당할 수 있다.
  public readonly name: string = "Mark";
  private readonly kind: string;

  public constructor(
    private _name: string,
    private _age: number,
    kind: string
  ) {
    this.kind = kind;
  }

  hello() {
    // this.kind = "쿨";
    return this.kind;
  }
}
