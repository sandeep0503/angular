import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { UserdataService } from '../userdata/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BaseUrl=''
  token=''

  constructor( private http:HttpClient,@Inject('BaseUrl') _baseurl,private userdata:UserdataService) {
    this.BaseUrl= _baseurl
    this.token=this.userdata.getData()
   }
   public register(form){
    var header_object = new HttpHeaders().set('Authorization','Bearer '+this.token)
    return this.http.post(this.BaseUrl+"/register",form,{headers:header_object})
   }

  public getstudent(){
    var header_object=new HttpHeaders().set('Authorization','Bearer '+this.token)
    return this.http.get(this.BaseUrl+"/getStudent",{headers:header_object})
  }

}
