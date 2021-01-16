import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twow-waybinding',
  template:`
  {{name}}
  <input [(ngModel)]="name" type="text">
  
  `,
  styleUrls: ['./twow-waybinding.component.css']
})
export class TwowWaybindingComponent implements OnInit {
  public name="";
  constructor() { }

  ngOnInit(): void {
  }

}
