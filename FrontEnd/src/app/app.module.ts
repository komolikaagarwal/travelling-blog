import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ListingsComponent } from './listings/listings.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
  
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    ListingsComponent,
    NewsComponent,
    ContactComponent,
    SignupComponent,
    SigninComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
