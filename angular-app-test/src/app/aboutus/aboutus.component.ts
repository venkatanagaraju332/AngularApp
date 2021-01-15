import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-aboutus', Type-1
  //selector: '.app-aboutus', Type-2
  selector: '[app-aboutus]',
  //templateUrl: './aboutus.component.html', Type-1
  //Type -2 as 
  //template: '<h1>Template String concatination with Singe line <h1>',
  //Type -3 as 
  template: `<h1>Template String concatination with Multile line </h1>
    <h1>Hello Raju</h1>
    <h1>Hello name form interpolation {{name}}</h1>
    <h1>{{getName()}}</h1>
    <h1>{{name.length}}</h1>
    <h1>{{name.toUpperCase()}}</h1>
    <h1>{{siteurl}}</h1>
  `,
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public name ="Venkata Nagaraju";

  public siteurl =window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    return "Methed interpolation" + this.name;
  }

}
