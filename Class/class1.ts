interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

// Typescript 에서 접근제한자 가능
// private public protected
// Default : public
class Cart {
  // user: User;
  // protected store: object;

  //생성자에서 매개변수에 접근제한자를 주면서 멤버 선언/할당을 동시에 진행가능
  //ES6 생성자 매개변수로 Default Value 할당가능
  constructor(public user: User, protected store: object = {}) {
    // this.user = user;
    // this.store = {};
  }

  put(id: string, product: Product) {
    // this.user.name
    this.store[id] = product;
  }

  get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  getPromotion(id: string) {
    return this.store;
  }
}

const cartJohn = new Cart({ name: "John" });
const promotionCart = new PromotionCart({ name: "DH" });

cartJohn.user;
promotionCart.getPromotion("id");
promotionCart.user;
