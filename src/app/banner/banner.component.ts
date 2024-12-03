import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [NgbCarouselModule],
	templateUrl: './banner.component.html',
  styleUrl:"./banner.component.scss",
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class BannerComponent {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	// images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["https://plus.unsplash.com/premium_photo-1695844418774-b14831fa5416?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1709377195538-5522ed0f9e10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1476458393436-fb857cc4c7b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
    config.interval = 1000;
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
