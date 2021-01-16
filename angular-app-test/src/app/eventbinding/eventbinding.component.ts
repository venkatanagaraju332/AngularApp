import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-eventbinding',
  template: `
  
  <div><button (click)="onClick()">Welcome Raju....</button></div>
  <div>{{greeting}}</div>
  <div><button (click)="greetingone='event with greeting property of class'">Welcome Raju....</button></div>
  <div>{{greetingone}}</div>
  `,
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public greeting="Before button Click";
  public greetingone="Before button Click";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("Welcome to Raju eventbinding");    
    this.greeting="After button Click Raju....";
  }
}
