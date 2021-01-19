import { Component } from '@angular/core';
/*import { FormControl, FormGroup } from '@angular/forms';*/
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    get userName(){
      return this.registraionForm.get('userName');
    }

    constructor(private fb:FormBuilder){ }

    registraionForm = this.fb.group({
      userName :[' ',[Validators.required,Validators.minLength(3)]],
      password : [],
      confirmPassword :[],
    address:this.fb.group({
      city : [],
      state : [],
      postalCode: []
      })
    });

  /*registraionForm = new FormGroup({
    userName : new FormControl('VenkataNagaraju'),
    password : new FormControl(''),
    confirmPassword :new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode : new FormControl('')
    })
  });*

  /*loadApiData(){
    this.registraionForm.setValue({
      userName :'VenkataNagaraju',
      password : 'test',
      confirmPassword :'test',
    address: {
      city : 'Guntur',
      state : 'A.P',
      postalCode: '522413'
      }
    });*
    this.registraionForm.patchValue({
      userName :'VenkataNagaraju',
      password : 'test',
      confirmPassword :'test'
    }); 
  }*/
}
