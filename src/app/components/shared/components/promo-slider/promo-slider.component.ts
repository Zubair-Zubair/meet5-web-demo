import { Component } from '@angular/core';

@Component({
  selector: 'app-promo-slider',
  templateUrl: './promo-slider.component.html',
  styleUrls: ['./promo-slider.component.scss']
})
export class PromoSliderComponent {

  currentIndex = 0;

  slides = [
    {
      image: 'assets/promo/promo1.jpg',
      title: 'Upgrade to Premium',
      description: 'Join unlimited activities and meet more people!',
      button: 'Upgrade Now'
    },
    {
      image: 'assets/promo/promo2.jpg',
      title: 'Discover New Events',
      description: 'Find amazing activities happening near you.',
      button: 'Explore'
    },
    {
      image: 'assets/promo/promo3.jpg',
      title: 'Invite Friends',
      description: 'Bring friends and enjoy activities together.',
      button: 'Invite'
    }
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

}