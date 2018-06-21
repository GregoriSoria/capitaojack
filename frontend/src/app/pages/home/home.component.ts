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
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false
  };

  // min 5 slides
  slides = [];
  loadingSlide = false;
  activeImage = 'assets/images/header.jpg';

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
    this.activeImage = this.slides[index].img;
  }

  ngOnInit() {
    this.pageProvider.getPage('principal').then(page => {
      this.typerText = page.typer_text;
      for (let i = 0; i < page.principal_header_slider.length; i++ )  {
        this.slides.push({img: page.principal_header_slider[i]});
      }
    });
  }

}
