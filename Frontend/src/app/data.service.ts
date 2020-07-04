import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL= "Http://localhost:3000";

  constructor(private http: HttpClient) { }

  signUp(data):any
  {
    return this.http.post(this.baseURL + "/signup",data);

  }

   signIN(data):any
  {
    return this.http.post(this.baseURL + "/signin",data);

  }
}

