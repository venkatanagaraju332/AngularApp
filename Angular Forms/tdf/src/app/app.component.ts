import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted= false;
  errorMsg ='';
  userModel= new User('Venkata','venkat@gmail.com',9030140332,'default','morning',true);
  constructor(private _enrollmentService:EnrollmentService){}
  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }
  onSubmit(){
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusTest
    )
  }
}
