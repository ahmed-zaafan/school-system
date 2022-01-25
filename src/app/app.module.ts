import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { ListOfTeacherComponent } from './teacher/list-of-teacher/list-of-teacher.component';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { ComplaintsComponent } from './shared/complaints/complaints.component';
import { ActivitesComponent } from './shared/activites/activites.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { CoursesComponent } from './shared/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListOfTeacherComponent,
    AddTeacherComponent,
    NotFoundComponent,
    UpdateTeacherComponent,
    ListStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ComplaintsComponent,
    ActivitesComponent,
    AboutUsComponent,
    CoursesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
