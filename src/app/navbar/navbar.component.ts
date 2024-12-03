import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { RouterLink } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  img_var:string = "../asset/naturals_header_logo.png";
}
