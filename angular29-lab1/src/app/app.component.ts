import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import {ProductListComponent } from './product/product-list/product-list.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component'

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css'],
 styles: []
})
export class AppComponent implements AfterViewInit,OnInit {
 @ViewChild('productList')
 productList: ProductListComponent;
 @ViewChild('todoList')
 todoList: ToDoListComponent;

 ngOnInit():void{
   
 }
 ngAfterViewInit(): void {
   
  // this.productList.products=this.backendService.getProducts();
  //HW
  // this.todoList.tasks.push({name:'task1',desc:'this is task 1.1'});
  // this.todoList.tasks.push({name:'task1',desc:'this is task 1.2'});
 }
 constructor(private backendService:BackendService) {}
}

