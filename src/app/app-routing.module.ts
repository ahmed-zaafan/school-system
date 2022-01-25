import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { ListOfTeacherComponent } from './teacher/list-of-teacher/list-of-teacher.component';
import { ComplaintsComponent } from './shared/complaints/complaints.component';
import { ActivitesComponent } from './shared/activites/activites.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { CoursesComponent } from './shared/courses/courses.component';


const routes: Routes = [
  { path : "home" , component : HomeComponent},
  { path : "" , component : HomeComponent},

  { path : "listT" , component : ListOfTeacherComponent},
  { path : "addT" , component : AddTeacherComponent},
  { path : "listT/:id" , component : UpdateTeacherComponent},

  { path : "listS" , component : ListStudentComponent},
  { path : "addS" , component : AddStudentComponent},
  { path : "listS/:id" , component : UpdateStudentComponent},

  { path : "copmlaint" , component : ComplaintsComponent},
  { path : "activites" , component : ActivitesComponent},
  { path : "courses" , component : CoursesComponent},
  { path : "about" , component : AboutUsComponent},

  { path : "**" , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
