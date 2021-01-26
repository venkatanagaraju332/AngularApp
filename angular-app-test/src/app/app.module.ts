import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferencevariablesComponent } from './templatereferencevariables/templatereferencevariables.component';
import { TwowWaybindingComponent } from './twow-waybinding/twow-waybinding.component';
import { FormsModule } from '@angular/forms';
import { NgifdirectiveComponent } from './ngifdirective/ngifdirective.component';
import { NgswitchdirectiveComponent } from './ngswitchdirective/ngswitchdirective.component';
import { NgfordirectiveComponent } from './ngfordirective/ngfordirective.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { PipesComponent } from './pipes/pipes.component';
/*import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';*/
import { EmployeeService } from './employee.service';
import { HttpClientModule} from '@angular/common/http';

import  { myRoutings } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TemplatereferencevariablesComponent,
    TwowWaybindingComponent,
    NgifdirectiveComponent,
    NgswitchdirectiveComponent,
    NgfordirectiveComponent,
    ComponentinteractionComponent,
    PipesComponent,
    /*EmployeeListComponent,
    EmployeeDetailComponent*/
    myRoutings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
