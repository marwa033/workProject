import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Scrollbar, SwiperOptions } from 'swiper/core';
import { LoaderService } from '../../shared/components/loader/loader.service';
SwiperCore.use([Scrollbar]);

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesComponent implements OnInit {
  data: string[] = [
    'assets/images/home/gallery2.jpg',
    'assets/images/home/gallery3.jpg',
    'assets/images/home/gallery4.jpg',
    'assets/images/home/gallery5.jpg',
    'assets/images/home/gallery6.jpg',
    'assets/images/home/gallery7.jpg',
    'assets/images/home/gallery8.jpg',
    'assets/images/home/gallery9.jpg',
  ];
  config: SwiperOptions = {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    spaceBetween: 30,
    slidesPerView: 'auto', // 4
    grabCursor: true,
    speed: 700,
    preloadImages: true,
  };

  constructor(private loader: LoaderService) {}

  ngOnInit(): void {
     
    this.loader.showLoader();
    setTimeout(() => {
      this.loader.hideLoader();
    }, 2500);
  }
}
