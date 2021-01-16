import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-ngswitchdirective',
  template: `  
    <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You have picked red color....</div>
        <div *ngSwitchCase="'green'">You have picked green color....</div>
        <div *ngSwitchCase="'yellow'">You have picked yellow color....</div>
        <div *ngSwitchDefault>Pick again....</div>
    </div>  
  `,
  styleUrls: ['./ngswitchdirective.component.css']
})
export class NgswitchdirectiveComponent implements OnInit {

  public color ="green";
  
  constructor() { }

  ngOnInit(): void {
  }

}
