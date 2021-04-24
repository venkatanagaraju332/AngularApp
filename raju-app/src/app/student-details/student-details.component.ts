import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  template: `
    <h1>
      Student-details 
    </h1>
    <ul>
      <li *ngFor="let x of students">
      {{x.id}} . {{x.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public students =  [ ] as  any [];

  constructor(private  _studentinfo = StudentService) { }

  ngOnInit(){
    this.students = this._studentinfo.getStudents();
  }

}
