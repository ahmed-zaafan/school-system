import { StudentService } from './../../sharedServes/student.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  object = new Student ;
  constructor( private serv : StudentService , private route: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe(data =>{
      this.route.navigateByUrl('listS')
    })
  }
}
