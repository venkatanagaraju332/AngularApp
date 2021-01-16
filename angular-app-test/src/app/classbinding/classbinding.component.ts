import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-classbinding',
  template: `  
    <h1>ClassBinding.....</h1>
    <h2 class="text-success">Hi Raju.... without class binding</h2>
    <h2 [class]="sucessClass">Hi Raju.... class binding</h2>  
    <h2 [class.text-danger]="hasError">Hi Raju.... class binding</h2>  

    <h2 [ngClass]="messageClasses">Hi Raju....Multiple classes binding</h2> 
  `,
  styles: [`  
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }  
  `]
})
export class ClassbindingComponent implements OnInit {
  public sucessClass ="text-success";
  public hasError=false;
  public isSpical= true;
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpical,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
