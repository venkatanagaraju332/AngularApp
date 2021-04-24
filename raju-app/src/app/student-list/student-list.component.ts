import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h1>
      Student-List 
    </h1>
    <ul>
      <li *ngFor="let x of students">
      {{x.id}} . {{x.name}} .{{x.age}}
      </li>
    </ul>
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students =  [ ] as  any [];

  constructor(private _studentinfo = StudentService) { }

  ngOnInit(){

    this.students = this._studentinfo.getStudents();

  }

}
