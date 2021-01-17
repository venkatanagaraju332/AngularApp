import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-pipes',
  template:`    
    <h1>Pipes Examples with Strings.....</h1>
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{message | titlecase}}</h2>
    <h2>{{name | slice:2:6}}</h2>

    <h2>{{person | json}}</h2>

    <h1>Pipes Examples with Number.....</h1>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency : 'GBP'}}</h2>
    <h2>{{0.25 | currency : 'GBP' : 'code'}}</h2>

    <h1>Pipes Examples with date.....</h1>
    <h2>{{date}}</h2>
    <h2>{{date  | date : 'short'}}</h2>
    <h2>{{date}}</h2>






  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name ="Hi Venkata ......working with pipes";
  public message ="hi raju ... how are you..";
  public person = {
    "firstname":"Tippanaboina",
    "lastname":"VenkataNagaraju"
  };

  constructor() { }

  ngOnInit(): void {
  }
  public date= new Date();
}
