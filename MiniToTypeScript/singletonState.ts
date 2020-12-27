import {ProductManager} from './productManager'
import {UserType,PageName} from './myEnum'

class SingletonState {
    
    static instance:SingletonState | null = null;
	currentUserType:UserType;
	currentPage:PageName;
    productManager:ProductManager;
	
	constructor(){
		this.productManager = new ProductManager();
		this.currentPage = PageName.LOGIN_PAGE
	}
	 
	static getState():SingletonState {
		if (this.instance == null) {
			this.instance = new SingletonState();
		}
		return this.instance;
	}
	
	getProductManager():ProductManager {
		return this.productManager;
	}
	

}

export default SingletonState