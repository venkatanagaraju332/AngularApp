import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  template: `
    <h1>
      Course-Details
    </h1>    
    <h1>You have selected ==  {{courseID}}</h1>
  `,
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  public courseID: any;

  constructor(private _activatedservice:ActivatedRoute) { }//activated router service

  ngOnInit(){
      let cid =  this._activatedservice.snapshot.paramMap.get("id") ;
      this.courseID= cid;
  }

}
