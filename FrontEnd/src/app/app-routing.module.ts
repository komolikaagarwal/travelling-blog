import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ListingsComponent } from './listings/listings.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  { path: 'listings', component: ListingsComponent },
  { path: 'news', component:NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component:HomeComponent },
  { path: 'signup', component:SignupComponent  },
  { path: 'signin', component:SigninComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
