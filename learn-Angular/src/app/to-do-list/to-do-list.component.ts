import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  items=['Coffee','Breakfast'];
  @Input()
  itemAdd:string;
  constructor() { }

  ngOnInit(): void {
  }
  addTodoList():void{
    this.items.push(this.itemAdd);
    this.itemAdd='';
  }
  deleteItem(itemIndex:number):void{
    this.items.splice(itemIndex,1);
  }

}
