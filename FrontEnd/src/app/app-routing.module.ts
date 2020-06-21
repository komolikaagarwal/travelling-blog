import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListingsComponent } from './listings/listings.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'',component:IndexComponent},
  { path: 'home', component: IndexComponent },
  { path: 'about us', component:AboutComponent  },
  { path: 'news', component: BlogComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'listings', component:ListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
