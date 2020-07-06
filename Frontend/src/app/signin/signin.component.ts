import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  nameProp;
  passwordProp;

  constructor(private router:Router , private ds:DataService) { }

  ngOnInit(): void {
  }
  signin(){

    this.ds.signIn({ name: this.nameProp,  password: this.passwordProp })
       .subscribe((response) => {
        if (response.status == "ok")
        {
          localStorage.setItem('name',this.nameProp);
          localStorage.setItem('email', response.data.email);
          this.router.navigate(['/listing']);
         }
       })
    

  }

}
