import { TestComponent } from './../test/test.component';
import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { SlideTextComponent } from "../slide-text/slide-text.component";
import { BookServiceComponent } from '../book-service/book-service.component';
import { BookAppComponent } from "../book-app/book-app.component";
import { PannelComponent } from "../pannel/pannel.component";
import { OurServiceComponent } from '../our-service/our-service.component';
import { FooterComponent } from "../footer/footer.component";
import { MapComponent } from "../map/map.component";
import { AcademyComponent } from "../academy/academy.component";
import { NavbarComponent } from '../navbar/navbar.component';
// import { CheakComponent } from '../cheak/cheak.component';
// import { CheckComponent } from '../cheak/cheak.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, SlideTextComponent, BookServiceComponent,
    BookAppComponent, PannelComponent, OurServiceComponent,
    FooterComponent, MapComponent, AcademyComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
