import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usernameProp;
  passProp;

  constructor(private router:Router , private ds:DataService) { }

  ngOnInit(): void {
  }
  signin()
  {
    this.ds.signIn({username: this.usernameProp, password: this.passProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {

        localStorage.setItem('username', this.usernameProp);
        localStorage.setItem('email', response.data.email);
        this.router.navigate(['/listings']);

      }
    })
    
  }

}
