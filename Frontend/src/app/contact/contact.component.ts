import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude = 24.529375;
  longitude =  73.711309;
  zoom = 4;
  zoomCtrl = true;
  name;
  usersList;
  constructor(private ds: DataService) { } 

  ngOnInit(): void {
    // this.name = localStorage.getItem('name')
    this.name = 'ADMIN';
    // this.getMyCurrentLocation();
    this.ds.getUsers().subscribe((d) => {
      this.usersList = d.data;
      console.log(this.usersList);
    })
  }

  // markerClicked(u)
  // {
  //     alert(JSON.stringify(u))
  // }
  // getMyCurrentLocation() {
  //   console.log("getting my location");
  //   window.navigator.geolocation.getCurrentPosition((p) => {
  //     console.log("in callback");
  //     console.log(p.coords.longitude);
  //     console.log(p.coords.latitude);
  //     this.latitude = p.coords.latitude;
  //     this.longitude = p.coords.longitude;

  //   })
  }

// }

