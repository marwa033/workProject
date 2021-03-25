import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GradesService } from 'src/app/grades.service';
// import Swiper, { Parallax } from "swiper";
import SwiperCore, { Swiper,Parallax, Pagination, Autoplay,EffectCoverflow,Navigation} from 'swiper/core';
SwiperCore.use([Pagination,Parallax, Autoplay,EffectCoverflow,Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [ '/assets/images/admission1.jpg' ,  '/assets/images/contactUs.jpg'];
  honorData:{
    img: string;
    title: string;
    desc: string;
    link: string;
  }[] = [
    {img:'assets/images/s5.jpg', title:"Slide One", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/1"},
    {img:'assets/images/image1.jpg', title:"Slide Two", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/2"},
    {img:'assets/images/image2.jpg', title:"Slide Three", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link:  "honor/3"},
    {img:'assets/images/image3.jpg', title:"Slide Four", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/4"},
    {img:'assets/images/image4.jpg', title:"Slide Five", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/5"},
    {img:'assets/images/s5.jpg', title:"Slide One", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/1"},
    {img:'assets/images/image1.jpg', title:"Slide Two", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/2"},
    {img:'assets/images/image2.jpg', title:"Slide Three", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link:  "honor/3"},
    {img:'assets/images/image3.jpg', title:"Slide Four", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/4"},
    {img:'assets/images/image4.jpg', title:"Slide Five", desc:'Some quick example text to build on the card title and make up the bulk of the cards', link: "honor/5"},
  ]
  constructor(config: NgbCarouselConfig,
    private router: Router,
    private gradeService: GradesService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }
  ngOnInit(): void {
    var parallaxSlider;
var parallaxSliderOptions = {
  speed: 1000,
  autoplay: true,
  parallax: true,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    init: function() {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        (swiper.slides[i] as HTMLDivElement)
          .querySelector(".img-container")
          .setAttribute("data-swiper-parallax", `${0.75 * swiper.width}`);
        (swiper.slides[i] as HTMLDivElement)
          .querySelector(".img-container")
          .setAttribute("data-swiper-parallax-opacity", `${1}`);

        (swiper.slides[i] as HTMLDivElement)
          .querySelector(".title")
          .setAttribute("data-swiper-parallax", `${0.65 * swiper.width}`);

        (swiper.slides[i] as HTMLDivElement)
          .querySelector(".description")
          .setAttribute("data-swiper-parallax", `${0.5 * swiper.width}`);
      }
    },
    resize: function() {
      this.update();
    }
  },
  navigation: {
    nextEl: ".parallax-slider .next-ctrl",
    prevEl: ".parallax-slider .prev-ctrl"
  }
};

parallaxSlider = new Swiper(".parallax-slider", parallaxSliderOptions);
window.onresize = () => {
  parallaxSlider.destroy();
  parallaxSlider = new Swiper(".parallax-slider", parallaxSliderOptions);
};
  }
}



