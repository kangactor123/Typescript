// 타입을 파라미터화 (제네릭으로 정의)
// 제네릭 (타입변수 라고 부르기도 한다.)
function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

//제네릭을 이용해 타입을 유지할 수 있음
// createPromise<number>(1, 100).then((v) => console.log(v));

createPromise("123", 100).then((res) => console.log(res));

function createTuple<T, U>(v: T, v2: U): [T, U] {
  return [v, v2];
}

const t1 = createTuple<string, number>("123", 123);
const t2 = createTuple<object, string>({}, "");


