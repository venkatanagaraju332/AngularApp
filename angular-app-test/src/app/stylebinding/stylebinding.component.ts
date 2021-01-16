import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-stylebinding]',
  template:`
    <h1>Hi Raju... StyleBinding...</h1>

    <h2 [style.color]="'red'">Hi Raju... StyleBinding...</h2>

    <h2 [style.color]="hassError ? 'red' : 'green' ">Hi Raju... StyleBinding with condition...</h2>

    <h2 [style.color]="highlightcolor">HI Venkat....it is stylebinding with class property</h2>

    <h2 [ngStyle]="titleStyle">HI Venkat....it is ngstylebinding</h2>
  `,
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  public hassError=false;
  public isSpecial=false;
  public highlightcolor="yellow";
  public titleStyle={
    color:"red",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
