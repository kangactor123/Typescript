//싱글톤: 어플리케이션 런타임 중 클래스로부터 단 하나의 인스턴스만 생성하는 것

//constructor 을 private
class ClassName {
  private static instance: ClassName | null = null;
  private constructor() {}

  public static getInstance() {
    //ClassName으로부터 만든 Object가 있으면 그걸 리턴
    //ClassName으로부터 만든 Object가 없으면, 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
}

const a = ClassName.getInstance();
const a2 = ClassName.getInstance();

console.log(a === a2);
