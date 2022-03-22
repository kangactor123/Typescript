interface User {
  name: string;
}

//Type의 파라미터화 (generic)
//Code의 재사용성
class LocalDB<T> {
  constructor(private localStorageKey: string) {}
  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v && JSON.parse(v);
  }
}

const userDB = new LocalDB<User>("user");
userDB.add({ name: "kang" });
const user1 = userDB.get();
