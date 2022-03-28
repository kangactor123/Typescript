// index signature
class Students {
  [index: string]: "male" | "female";
}

const A = new Students();
A.mark = "male";
A.jaden = "male";

console.log(A);

const b = new Students();
b.anna = "female";
b.alex = "male";
b.thomar = "male";

console.log(b);
