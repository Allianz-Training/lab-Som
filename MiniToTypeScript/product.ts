import SingletonState from './singletonState'

export class Product {
	id:number;
	name:String;
	price:number;

	constructor(name:String,price:number) {
		// let inst = SingletonState.getState();
		// this.id = inst.productManager.counter();
		this.name = name;
		this.price = price;
	}

	getID():number {
		return this.id;
	}

	toString() {
		return this.id + ":" + this.name;
	}

}