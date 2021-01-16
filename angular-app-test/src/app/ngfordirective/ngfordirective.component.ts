import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-ngfordirective',
  template:`  
  <h1> ngFor directive with list rendering....</h1>

  <div>{{colors}}</div>

  <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
  </div>

  <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
  </div>

  <div *ngFor="let colorf of colors; first as f">
      <h2>{{f}} {{colorf}}</h2>
  </div>

  <div *ngFor="let colorl of colors; last as l">
      <h2>{{l}} {{colorl}}</h2>
  </div>

  <div *ngFor="let coloro of colors; odd as o">
      <h2>{{o}} {{coloro}}</h2>
  </div>

  <div *ngFor="let colore of colors; even as e">
      <h2>{{e}} {{colore}}</h2>
  </div>
  
  `,
  styleUrls: ['./ngfordirective.component.css']
})
export class NgfordirectiveComponent implements OnInit {

  public colors =["red","green","black","white"];
  constructor() { }

  ngOnInit(): void {
  }

}
