import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  @Input()
  task:Task;

  @Output()
  OnSelected:EventEmitter<TaskComponent>=new EventEmitter();

  @Output()
  OnClick:EventEmitter<TaskComponent>=new EventEmitter();

  isSelected:boolean;

  ngOnInit(): void {
  }

  select(){
    this.OnSelected.emit(this)
  }

  clicked(){
    this.OnClick.emit(this)
  }

}
