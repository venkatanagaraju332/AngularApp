import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Details  </h2>
  <h1>{{errMsg}}</h1>
  <ul *ngFor="let employee of employees">
      <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
  </ul>
  
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [] as  any;
  public errMsg: any;
  constructor(private _empdata:EmployeeService) { }

  ngOnInit(){
    this._empdata.getEmployees()
   .subscribe(data => this.employees = data, error => this.errMsg = error);
  }

}
