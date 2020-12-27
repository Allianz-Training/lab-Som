"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singletonState_1 = require("./singletonState");
const pageManager_1 = require("./pageManager");
// class Main {
// 	main(args:string[]) {
let inst = singletonState_1.default.getState();
let pm = new pageManager_1.PageManager(inst);
pm.startProgram();
// 	}
// }
// let m = new Main();
// m.main(null);
//# sourceMappingURL=main.js.map