import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nameProp;
  emailProp;
  passProp;
  usernameProp;
  repeatpassProp;


  constructor(private ds:DataService , private router:Router) { }

  ngOnInit(): void {
  }
  signUp()
  {
    this.ds.signUp({ name: this.nameProp, email: this.emailProp, password: this.passProp, username: this.usernameProp, repeatpass :this.repeatpassProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert(" Sign up successfully you will be directed to next page successfully");
        this.router.navigate(['/']);
      }
    })

  }

}
