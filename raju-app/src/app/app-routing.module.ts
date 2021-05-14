import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  //{path:'',component:StudentListComponent},
  {path:'',redirectTo:'/student' , pathMatch:'full'},
  {path:'student',component:StudentListComponent},
  {path:'course',component:CourseListComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutes = [
  StudentListComponent,
  CourseListComponent,
  PageNotFoundComponent
];
