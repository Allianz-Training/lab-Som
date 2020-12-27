"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productManager_1 = require("./productManager");
const myEnum_1 = require("./myEnum");
class SingletonState {
    constructor() {
        this.productManager = new productManager_1.ProductManager();
        this.currentPage = myEnum_1.PageName.LOGIN_PAGE;
    }
    static getState() {
        if (this.instance == null) {
            this.instance = new SingletonState();
        }
        return this.instance;
    }
    getProductManager() {
        return this.productManager;
    }
}
SingletonState.instance = null;
exports.default = SingletonState;
//# sourceMappingURL=singletonState.js.map