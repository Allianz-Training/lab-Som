import { Component, OnInit, ViewChildren,QueryList, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import {Task} from '../task';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  @ViewChildren(TaskComponent)
  taskList:QueryList<TaskComponent>;
  tasks:Task[];
  constructor(private backendService:BackendService) { 
    this.tasks=[];
  }
  @Input()
  nameTask:string;

  @Input()
  descriptionTask:string;

  taskClicked:Task;
  
  ngOnInit(): void {
    this.tasks=this.backendService.getTasks();
  }
  deleteTask(taskComponent:TaskComponent){
    console.log(this.tasks.indexOf(taskComponent.task));
    this.tasks.splice(this.tasks.indexOf(taskComponent.task),1);
  }
  addTask(nameS:string,descS:string){
    this.tasks.push({name:nameS,desc:descS});
    this.nameTask='';
    this.descriptionTask='';
  }
  clickedTask(taskComponent:TaskComponent){
    console.log(taskComponent.task.desc);
    this.taskList.forEach(p=>{
      p.isSelected=false;
    });
    taskComponent.isSelected=true;
    this.taskClicked=taskComponent.task;
  }

}
