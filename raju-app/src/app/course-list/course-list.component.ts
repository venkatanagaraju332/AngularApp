import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  template: `
  <h1>Course List Component....</h1>
  `,
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
