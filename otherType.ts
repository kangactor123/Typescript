/* array */

let list: number[] = [1, 2, 3];
// union type 으로 array value 혼합하기

let unionArray: (number | string)[] = [1, 2, 3, "array"];
//let list:Array<number> = [1,2,3];

/* tuple */
// 항상 타입도, 순서도, 길이도 동일해야함

let x:[string, number]; 

x = ["hello",123];
// x = [10, "123"]; error
// x[3] = 123; error

const person:[string, number] = ["DH", 29];
const [first, second] = person;
