import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './main/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import {EmployeeService} from './shared/employee.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';
import { DatePipe } from '@angular/common';
import {DepartmentService} from './shared/department.service';
import {NotificationService} from './shared/notification.service';
import { EmployeeListComponent } from './main/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    EmployeeService,
    DatePipe,
    DepartmentService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
