import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/emplist', pathMatch:'full'},
  {path:'emplist', component:EmployeeListComponent},
  {path:'empdetails', component:EmployeeDetailComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const myRoutings = [
  EmployeeListComponent,
  EmployeeDetailComponent,
  PageNotFoundComponent
];
