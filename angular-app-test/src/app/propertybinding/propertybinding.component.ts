import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `  
  <input type="text" value="VenkataNagaraju">
  <input [id]="typId" type="text" value="VenkataNagaraju">
  <input id="{{typId}}" type="text" value="VenkataNagaraju">
  <input bind-id="typId" type="text" value="VenkataNagaraju">
  <input [disabled]="false" bind-id="typId" type="text" value="VenkataNagaraju">
  <input [disabled]="isDisabled" bind-id="typId" type="text" value="VenkataNagaraju">
  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public typId ="MYtypID";
  public isDisabled =true;

  constructor() { }

  ngOnInit(): void {
  }

}
