import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
 @Input()
 title: string;
 constructor() {}
 ngOnChanges(changes: SimpleChanges): void {
   console.log(`[Before] title=${changes.title.previousValue}`);
   console.log(`[Current] title=${changes.title.currentValue}`);
 }
}
