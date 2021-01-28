import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  template: `
    <h1>
      Course-Details
    </h1>    
    <h1>You have selected ==  {{courseID}}</h1>
    
    <a (click)="toPrevious()">Pre</a>
    <a (click)="toNext()">Next</a>
    
  `,
  styles: [
  ]
})
export class CourseDetailsComponent implements OnInit {

  public courseID:any;
  

  constructor(private _activatedservice:ActivatedRoute,private _route:Router) { }//activated router service and Router services..

  ngOnInit(){
      //let cid =  this._activatedservice.snapshot.paramMap.get("id") ;
      //this.courseID= cid;
      this._activatedservice.paramMap.subscribe((param: ParamMap)=>{
        let id = param.get('id');
        this.courseID = id;
      })
  }


  toPrevious(){
    let previousID = this.courseID - 1;
    this._route.navigate(['/course',previousID]);//url creation
  }

  toNext(){
    let nextID = this.courseID + 1;
    this._route.navigate(['/course',nextID]);//url creation
  }

}
