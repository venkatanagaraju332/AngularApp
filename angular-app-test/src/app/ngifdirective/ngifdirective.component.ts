import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-ngifdirective',
  template:`  
    <h1 *ngIf="true">Hi Structural Directives......</h1>

    <h1 *ngIf="displayName">Hi Structural Directives using property binding......</h1>

    <h1 *ngIf="displayName; else elseBlock">Hi if block Venkata Nagaraju...</h1>

    <ng-template #elseBlock>
      <h2>Else part hidden Venkata Nagaraju...</h2>
    </ng-template>

    <div *ngIf="displayName; than thenBlock else elseeBlock"></div>

    <ng-template #thenBlock>
      <h2>Then Block Venkata Nagaraju...</h2>
    </ng-template>

    <ng-template #elseeBlock>
      <h2>Else Block Venkata Nagaraju...</h2>
    </ng-template>  
  `,
  styleUrls: ['./ngifdirective.component.css']
})
export class NgifdirectiveComponent implements OnInit {

  displayName=true;
  constructor() { }

  ngOnInit(): void {
  }

}
