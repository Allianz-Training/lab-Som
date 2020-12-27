"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        // let inst = SingletonState.getState();
        // this.id = inst.productManager.counter();
        this.name = name;
        this.price = price;
    }
    getID() {
        return this.id;
    }
    toString() {
        return this.id + ":" + this.name;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map