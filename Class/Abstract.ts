abstract class AbstractPerson {
  protected _name: string = "mark";

  abstract setName(name: string): void;
}

class RealPerson extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const rp = new RealPerson();
console.log(rp);

rp.setName("dh");
console.log(rp);

const rp2: AbstractPerson = new RealPerson();
rp2.setName("다형성");

console.log(rp2);
