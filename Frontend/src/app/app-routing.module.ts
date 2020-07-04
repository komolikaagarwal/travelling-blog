import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListingdetailsComponent } from './listingdetails/listingdetails.component';
import { ContactComponent } from './contact/contact.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listing details', component: ListingdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog details', component: BlogdetailsComponent },
  { path: 'signin', component:SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
