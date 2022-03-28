class StaticPerson {
  private static CITY = "Seoul";
  public static returnCity() {
    console.log(StaticPerson.CITY);
  }
  public static changeCity(c: string) {
    StaticPerson.CITY = c;
  }
}

const person1 = new StaticPerson();
const person2 = new StaticPerson();

//static method
//static 컴파일 시 메모리에 올려 클래스명과 함께 어디서든 사용할 수 있게 만듬

StaticPerson.returnCity();
StaticPerson.changeCity("Busan");
StaticPerson.returnCity();
