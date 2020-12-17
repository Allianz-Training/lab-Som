import { Injectable } from '@angular/core';
import {Product} from './product/product';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getTasks():Task[]{
    return [{name:'task1',desc:'this is task 1.1'},{name:'task2',desc:'this is task 1.2'}];
  }
  getProducts():Product[]{
    return [{name: 'ส้มโอ',price: 111},{name: 'แตงโม',price: 222},{name: 'มะพร้่าวน้ำหอม',price: 333}];
  }
  getProductById(productId:number):Product{
    return;
  }
}
