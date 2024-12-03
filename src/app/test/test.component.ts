// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   standalone: true,
//   imports: [],

//   styleUrl: './test.component.scss'
// })
// export class TestComponent {

// }



import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-test',
	standalone: true,
	imports: [NgbCarouselModule],
	  templateUrl: './test.component.html',
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class TestComponent {

}
