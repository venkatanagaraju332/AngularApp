import { Component, OnInit,Input,Output ,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-componentinteraction',
  template: `
  <h2>ComponentInteraction @Input and @Output......  parent to child and chilld to parentt</h2>

  <h2>{{"Hello ...." + parentData }}</h2>

  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {

 @Input() public parentData="";
  //@Input('parentData') public parentname;

  @Output() public childEvent= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Hi child component");
  }

}
