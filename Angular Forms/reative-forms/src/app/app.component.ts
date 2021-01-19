import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registraionForm = new FormGroup({
    userName : new FormControl('VenkataNagaraju'),
    password : new FormControl(''),
    confirmPassword :new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode : new FormControl('')
    })
  });
  loadApiData(){
    /*this.registraionForm.setValue({
      userName :'VenkataNagaraju',
      password : 'test',
      confirmPassword :'test',
    address: {
      city : 'Guntur',
      state : 'A.P',
      postalCode: '522413'
      }
    });*/
    this.registraionForm.patchValue({
      userName :'VenkataNagaraju',
      password : 'test',
      confirmPassword :'test'
    }); 
  }
}
