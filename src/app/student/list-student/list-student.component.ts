import { StudentService } from './../../sharedServes/student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  allData : [];
  constructor(private serv : StudentService , private route:Router) {
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
