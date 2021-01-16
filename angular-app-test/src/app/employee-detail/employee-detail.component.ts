import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Details  </h2>

  <ul *ngFor="let employee of employees">
      <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
  </ul>
  
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
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
