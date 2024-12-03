import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
// import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},

  {path:'blog',component:BlogComponent}
];



