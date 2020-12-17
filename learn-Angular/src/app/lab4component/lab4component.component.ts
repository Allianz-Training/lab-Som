import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab4component',
  templateUrl: './lab4component.component.html',
  styleUrls: ['./lab4component.component.css']
})
export class Lab4componentComponent implements OnInit {

  arr=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
