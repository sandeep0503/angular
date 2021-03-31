import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../shared/user/auth.service';
import { UserdataService } from '../shared/userdata/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdata: UserdataService,private router:Router,private userauth:AuthService){}
    
   
  loginForm = new FormGroup({
    'email': new FormControl(''),
    'password': new FormControl('')
  })

  ngOnInit(): void {
   if (this.userdata.getData() != null) {
      this.router.navigateByUrl('layout/dashboard')
    }
  }
   
  onclick(){
    // console.log(this.loginForm.value)
    this.userauth.login(this.loginForm.value).subscribe(
      (res:any)=>{
      //console.log(res.response.token)
      this.userdata.setData(res.response.token)
      this.router.navigateByUrl('layout/dashboard')

        //this.userdata.setData(this.loginForm.value)
        //this.router.navigateByUrl('layout/dashboard')
      },
      err =>{
        console.log(err)
      }
    )
  }
    }
    
