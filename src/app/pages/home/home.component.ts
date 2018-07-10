import { Component, OnInit } from '@angular/core';
import { PageProvider } from '../../providers/provider-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public typerText: String = "";
  slideConfig = {
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    variableWidth: true,
    infinite: true,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };

  navActive = false;

  // min 5 slides
  slides = [];
  loadingSlide = false;
  activeIndex = 0;

  constructor(private pageProvider: PageProvider) { }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slideClick(i: number) {
    this.loadingSlide = true;
    setTimeout(() => {
      this.activeSlide(i);
      this.loadingSlide = false;
    },1000)
  }

  beforeChange(e) {
    this.loadingSlide = true;
  }

  afterChange(e) {
    this.loadingSlide = false;
    this.activeSlide(e.currentSlide);
  }

  activeSlide(index: number) {
    this.activeIndex = index;
  }

  ngOnInit() {
    this.pageProvider.getPage('principal').then(page => {
      this.typerText = page.texto_animado;
      this.slides = page.slide_superior;
      this.slideConfig.slidesToShow = this.slides.length-1;
    });
  }

}
