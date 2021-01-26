import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee List</h2>
  <h1>{{errMsg}}</h1>
  <ul *ngFor="let employee of employees">
      <li>{{employee.name}} age is {{employee.age}}</li>
  </ul>  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [] as  any;
  public errMsg: any;

  constructor(private _empdata:EmployeeService) { }

  ngOnInit(){
   this._empdata.getEmployees()
   .subscribe(data => this.employees = data, error => this.errMsg = error);
  }
  
}
