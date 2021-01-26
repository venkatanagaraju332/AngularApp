import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path:'emplist', component:EmployeeListComponent},
  {path:'empdetails', component:EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const myRoutings = [
  EmployeeListComponent,
  EmployeeDetailComponent
];
