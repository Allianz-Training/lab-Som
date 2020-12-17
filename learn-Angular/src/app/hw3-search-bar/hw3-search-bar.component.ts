import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw3-search-bar',
  templateUrl: './hw3-search-bar.component.html',
  styleUrls: ['./hw3-search-bar.component.css']
})
export class Hw3SearchBarComponent implements OnInit {

  constructor() { }
  @Input()
  searchText:string

  ngOnInit(): void {
  }

}
