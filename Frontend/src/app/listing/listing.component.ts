import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  loggedInUserName;
  loggedInUserEmail;

  constructor() { }

  ngOnInit(): void {
    this.loggedInUserName = localStorage.getItem('name');
    this.loggedInUserEmail = localStorage.getItem('email');
  }

}
