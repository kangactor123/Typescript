interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

//interface implements 하기
class KoreanProgrammer implements Person, Programmer {
  // public name: string;
  constructor(public name: string) {}
  say(message: string): void {
    console.log(message);
  }
  writeCode(requirement: string) {
    return requirement;
  }

  loveKimchi() {
    return "I love Kimchi";
  }
}

const Jay = new KoreanProgrammer("Jay");
Jay.loveKimchi();

//abstract 추상 클래스
abstract class Korean implements Person {
  public abstract idNum: number;
  constructor(public name: string) {}

  say(message: string) {
    return message + "...";
  }

  abstract confirmId(): number;
}

class KoreanWorker extends Korean implements Programmer {
  // idNum:number;

  constructor(public idNum: number, name: string) {
    super(name);
  }

  confirmId() {
    return this.idNum;
  }

  writeCode(requirement: string) {
    return requirement;
  }
}

const kim = new KoreanWorker(123456, "kim");
//자바에서의 다형성
//사용자 정의 자료형
//Korean kim = new KoreanWorker(123456, "kim");
