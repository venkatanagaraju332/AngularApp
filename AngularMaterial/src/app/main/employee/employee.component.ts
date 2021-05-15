import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments= [
      {id:1,name:"Angular"},
      {id:2,name:"React"},
      {id:3,name:"Bootstrap"},
      {id:4,name:"Vue"},
      {id:5,name:"Node"},
  ]
  constructor(public empService:EmployeeService) { }

  ngOnInit(){
    this.empService.getEmployees();
  }

  onClick(){
    this.empService.form.reset();
    this.empService.initializeFormGroup();
  }

  onSubmit(){
    if(this.empService.form.valid){
      this.empService.insertEmployee(this.empService.form.value)
      this.empService.form.reset()
      this.empService.initializeFormGroup()
    }
  }
}
