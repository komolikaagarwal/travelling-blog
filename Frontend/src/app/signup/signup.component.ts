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
passwordProp;
repasswordProp;

  constructor(private ds:DataService , private router:Router) { }

  ngOnInit(): void {
  }
  signUP(){

      this.ds.signUp({name:this.nameProp, email:this.emailProp,password:this.passwordProp, repassword:this.repasswordProp})
      .subscribe((response)=>{
        if(response.status=="ok") 
        {
           alert("sign up successfully and redirected to next page");
           this.router.navigate(['/signin']);
        }
     })

  }

}
