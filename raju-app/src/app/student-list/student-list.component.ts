import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
  <h1>Student List Component....</h1>
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
