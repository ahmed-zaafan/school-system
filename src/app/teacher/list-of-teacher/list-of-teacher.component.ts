import { TeacherService } from './../../sharedServes/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionsService } from 'src/app/sharedServes/api-functions.service';

@Component({
  selector: 'app-list-of-teacher',
  templateUrl: './list-of-teacher.component.html',
  styleUrls: ['./list-of-teacher.component.css']
})
export class ListOfTeacherComponent implements OnInit {
  allData : [];
  constructor(private serv : TeacherService , private route:Router) {
    this.serv.getTeacher().subscribe((data:any) => {

      this.allData = data;

    })

   }

  ngOnInit(): void {
  }
  remove(id){
    this.serv.delete(id).subscribe((data) =>{
      window.location.reload()
    })
  }
}
