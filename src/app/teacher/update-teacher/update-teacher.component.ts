import { TeacherService } from './../../sharedServes/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApiFunctionsService } from 'src/app/sharedServes/api-functions.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  object = new Teacher ;
  id;
  constructor( private serv : TeacherService , private route: Router , private activRout : ActivatedRoute) {
    this.id = this.activRout.snapshot.paramMap.get('id');
    console.log(this.id);
    this.serv.getById(this.id).subscribe( data =>{
      this.object = data
    })
   }

  ngOnInit(): void {
  }
update(){
  this.serv.put(this.object ,this.id).subscribe(data =>{
    this.route.navigateByUrl('listT')
  })
}
}
