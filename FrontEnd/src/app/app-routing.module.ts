import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListingsComponent } from './listings/listings.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'about us', component: AboutusComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'news', component:NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
