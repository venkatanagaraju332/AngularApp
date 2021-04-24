import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-test',
  template: `
  <h1>{{Parent}}</h1>
  <button (click)="childfun()">Click me</button>

  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  //@Input() public toParent: any;
  @Input('toParent') public Parent: any;

  @Output() public childinfo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  childfun(){
    this.childinfo.emit("This is Child info sending to Parent ....");
  }

}
