import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>

  <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
  </ul>
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    {"id":1,"name":"Raju","age":35},
    {"id":2,"name":"NagaRaju","age":36},
    {"id":3,"name":"VenkatRaju","age":37},
    {"id":4,"name":"TRaju","age":38},
    {"id":5,"name":"VRaju","age":39},
    {"id":6,"name":"LRaju","age":40},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
