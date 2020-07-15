import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ListingComponent } from './listing/listing.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ListingdetailsComponent } from './listingdetails/listingdetails.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ListingComponent,
    BlogdetailsComponent,
    ListingdetailsComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBRnRcTDI6HAlccnID7YJ- 1JnYnl1fPnm8'
      //AIzaSyBRnRcTDI6HAlccnID7YJ- 1JnYnl1fPnm8
    })
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
