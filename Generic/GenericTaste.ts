function helloString(msg: string): string {
  return msg;
}

function helloNumber(msg: number): number {
  return msg;
}

//더 많은 반복된 함수가 생기겠죠
function hello(msg: any): any {
  return msg;
}

console.log(hello("mark").length);
console.log(hello(24).length);

// Generic : 지정해주는 T 로 자료형이 바뀜
function helloGeneric<T>(msg: T) {
  return msg;
}

console.log(helloGeneric<string>("hi").length);
console.log(helloGeneric<number>(25));
console.log(helloGeneric(true));
