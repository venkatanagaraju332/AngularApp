import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  template: `
    <h1>
      Course-List 
    </h1>
    <ul>
      <li (click)="onSelect(x)" *ngFor="let x of course">
        {{x.id}} . {{x.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class CourseListComponent implements OnInit {
  public course =  [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Reactjs"},
    {"id": 3, "name": "Vuejs"},
    {"id": 4, "name": "Java"},
    {"id": 5, "name": ".Net"},
    {"id": 6, "name": "Oracle"}
  ]
  constructor(private _routeservice:Router) { } //Router service

  ngOnInit(): void {
  }

  onSelect(x: { id: any; }){
    this._routeservice.navigate(['/course',x.id]);//url creation
  }
  
}
