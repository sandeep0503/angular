import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formModel={
    name:'',
    email:'',
    password:''
  }

  constructor( private Student :StudentService) { }

  ngOnInit(): void {
  }

  register(){
    this.Student.register(this.formModel).subscribe(
      (res:any)=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
