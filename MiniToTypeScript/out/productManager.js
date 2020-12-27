"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
const product_1 = require("./product");
class ProductManager {
    constructor() {
        this.products = [];
        this.idCount = 0;
        this.products.push(new product_1.Product("Apple", 1));
        this.products.push(new product_1.Product("Banana", 5));
        this.products.push(new product_1.Product("Coconut", 10));
    }
    counter() {
        return this.idCount++;
    }
    showAll() {
        for (let product of this.products) {
            console.log(" (" + product.getID() + ")" + product.name + " | Price : " + product.price);
        }
    }
    addProduct(p) {
        this.products.push(p);
    }
    removeProduct(p) {
        const idx = this.products.indexOf(p, 0);
        this.products.splice(idx, 1);
    }
    removeProductbyID(i) {
        let isFoundedProduct = false;
        for (let product of this.products) {
            if (product.getID() == i) {
                isFoundedProduct = true;
                this.removeProduct(product);
                break;
            }
        }
        if (!isFoundedProduct) {
            console.log("Product id " + i + " not existed in this list.");
        }
    }
}
exports.ProductManager = ProductManager;
//# sourceMappingURL=productManager.js.map