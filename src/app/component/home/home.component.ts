import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	// images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [1055, 194, 368].map((n) => `https://www.muji.com/public/media/tw/img/main/10017321/L103-1260-0307.jpg`);

	constructor(config: NgbCarouselConfig) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
  setAll(d: any){
  }
}
