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
    ComponentinteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
