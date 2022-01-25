import { TeacherService } from './../../sharedServes/teacher.service';
import { Router, Routes } from '@angular/router';
import { Teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/sharedServes/api-functions.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  object = new Teacher ;
  constructor( private serv : TeacherService , private route: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe(data =>{
      this.route.navigateByUrl('listT')
    })
  }
}
