import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP-Componet....';
  public name = "from App componet VenkataNagaraju Tippanaboina...++++";
  public message="";
  public pageTitle ="Angular Component Interaction...";
  count=0;  
  incrementCount(){
    this.count +=1;
  }
}
