import { LoaderService } from '../../shared/components/loader/loader.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { GradesService } from '../../../grades.service';
import { Router } from '@angular/router';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  SwiperOptions,
} from 'swiper/core';
SwiperCore.use([Pagination, EffectCoverflow, Autoplay, Navigation]);

const data = [
  {
    srcUrl: '/assets/images/home/gallery1.jpg',
    previewUrl: '/assets/images/pages/IMG_2298.jpg',
  },
  {
    srcUrl: '/assets/images/home/gallery4.jpg',
    previewUrl: '/assets/images/pages/IMG_2295.jpg',
  },
  {
    srcUrl: '/assets/images/home/gallery2.jpg',
    previewUrl: '/assets/images/pages/IMG_2283.jpg',
  },
  {
    srcUrl: '/assets/images/home/gallery3.jpg',
    previewUrl: '/assets/images/pages/IMG_2293.jpg',
  },
  {
    srcUrl: '/assets/images/home/gallery5.jpg',
    previewUrl: '/assets/images/pages/IMG_2296.jpg',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  honorConfig: SwiperOptions = {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    slidesPerView: 'auto', // 4
    grabCursor: true,
    centeredSlides: true,
    speed: 1200,
    autoplay: {
      delay: 4000,
    },
    slideToClickedSlide: true,
    loop: true,
    preloadImages: true,
    pagination: false,
  };
  videoConfig: SwiperOptions = {
    breakpoints: {
      900: {
        slidesPerView: 2,
        initialSlide: 1,
      },
      0: {
        slidesPerView: 1,
        initialSlide: 0,
      },
    },
    centeredSlides: true,
    navigation: true,
    preloadImages: true,
  };
  //

  @ViewChild('slider') slider: ElementRef<HTMLDivElement>;
  currentActiveNew: number;
  items: GalleryItem[];

  imageData = data;
  pagination: any = false;
  honorData: {
    img: string;
    title: string;
    desc: string;
    // link: string;
  }[] = [
    {
      img: 'assets/images/home/gallery2.jpg',
      title: 'سعيد بن خالد الشهرانى',
      desc:
        'حصل الطالب: سعيد بن خالد الشهرانى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      img: 'assets/images/home/gallery3.jpg',
      title: 'محمد عبدالله العنزي',
      desc:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      img: 'assets/images/home/gallery4.jpg',
      title: 'انس بن محمد الثبيتى',
      desc:
        'حصل الطالب: انس بن محمد الثبيتى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
    {
      img: 'assets/images/home/gallery5.jpg',
      title: 'سلطان بن حسن الشهرى',
      desc:
        'حصل الطالب: سلطان بن حسن الشهرى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/4',
    },
    {
      img: 'assets/images/home/gallery6.jpg',
      title: 'محمد عبدالله العنزي',
      desc:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/5',
    },
    {
      img: 'assets/images/home/gallery7.jpg',
      title: 'سعود بن ابراهيم',
      desc:
        'حصل الطالب: سعود بن ابراهيم على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/1',
    },
    {
      img: 'assets/images/home/gallery8.jpg',
      title: 'محمد عبدالله العنزي',
      desc:
        'حصل الطالب: محمد عبدالله العنزي على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/2',
    },
    {
      img: 'assets/images/home/gallery9.jpg',
      title: 'محمد بن عبدالله الخالدى',
      desc:
        'حصل الطالب: محمد بن عبدالله الخالدى على المركز الاول للصف السادس الابتدائي مع مرتبة الشرف',
      // link: './honor/3',
    },
  ];
  dummyData: {
    id: number;
    active: boolean;
    img: string;
    title: string;
    discription: string;
  }[] = [
    {
      id: 1,
      active: true,
      img: 'assets/images/home/slider1.jpg',
      title: 'حصول مدير المدرسة الأستاذ: ',
      discription:
        'طارق بن عوض الزائدي على المركز الثاني ودرع التميز في جائزة وزارة والتعليم للتميز في دورتها الأولى على مستوى المملكة العربية السعودية لعام 1431هـ /2010م في بادرة جديدة من نوعها دشن اليوم ممثل مكتب تعليم الجنوب المشرف التربوي الفاضل الأستاذ / هديان الثبيتي ( مسابقة فارس العربية ) والتي تهدف إلى أن تكون ضمن برامج اليوم العالمي للغة العربية للعام القادم وبمشاركة جميع مدارس المكتب، تصفيات مسابقة الخطيب المبدع على مستوى فصول مدارس طلائع المبدعين الأهلية',
    },
    {
      id: 2,
      active: false,
      img: 'assets/images/home/slider2.jpg',
      title: 'حصول مدير المدرسة الأستاذ: ',
      discription:
        'طارق بن عوض الزائدي على المركز الثاني ودرع التميز في جائزة وزارة والتعليم للتميز في دورتها الأولى على مستوى المملكة العربية السعودية لعام 1431هـ /2010م في بادرة جديدة من نوعها دشن اليوم ممثل مكتب تعليم الجنوب المشرف التربوي الفاضل الأستاذ / هديان الثبيتي ( مسابقة فارس العربية ) والتي تهدف إلى أن تكون ضمن برامج اليوم العالمي للغة العربية للعام القادم وبمشاركة جميع مدارس المكتب، تصفيات مسابقة الخطيب المبدع على مستوى فصول مدارس طلائع المبدعين الأهلية',
    },
    {
      id: 3,
      active: false,
      img: 'assets/images/home/slider3.jpg',
      title: 'حصول مدير المدرسة الأستاذ: ',
      discription:
        'طارق بن عوض الزائدي على المركز الثاني ودرع التميز في جائزة وزارة والتعليم للتميز في دورتها الأولى على مستوى المملكة العربية السعودية لعام 1431هـ /2010م في بادرة جديدة من نوعها دشن اليوم ممثل مكتب تعليم الجنوب المشرف التربوي الفاضل الأستاذ / هديان الثبيتي ( مسابقة فارس العربية ) والتي تهدف إلى أن تكون ضمن برامج اليوم العالمي للغة العربية للعام القادم وبمشاركة جميع مدارس المكتب، تصفيات مسابقة الخطيب المبدع على مستوى فصول مدارس طلائع المبدعين الأهلية',
    },
  ];
  openImg(img) {
    open(img, 'blank');
  }
  toggleVission(e: MouseEvent) {
    let card = (e.target as HTMLDivElement).parentElement;

    if (card.classList.contains('opened')) {
      card.classList.remove('opened');
    } else {
      card.classList.add('opened');
    }
  }
  // end abdo code

  gradeId: number;
  constructor(
    public lightbox: Lightbox,
    private router: Router,
    public gallery: Gallery,
    private loader: LoaderService,
    private gradesService: GradesService
  ) {}
  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }
  ngOnInit(): void {
     
    this.loader.showLoader();
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);

    this.gradesService.currentMessage.subscribe(
      (message) => (this.gradeId = message)
    );
    // $('.hover').mouseleave(function () {
    //   $(this).removeClass('hover');
    // });

    setTimeout(() => {
      this.sliderInit();
      this.loader.hideLoader();
    }, 2500);
  }

  // start abdo code
  // start of slider
  sliderInit() {
    function lerp({ x, y }, { x: targetX, y: targetY }) {
      const fraction = 0.1;

      x += (targetX - x) * fraction;
      y += (targetY - y) * fraction;

      return { x, y };
    }

    let homeComponent = this;

    class Slider {
      IMG_CLASS: string;
      TEXT_CLASS: string;
      ACTIVE_IMG_CLASS: string;
      ACTIVE_TEXT_CLASS: string;
      el: any;
      contentEl: HTMLElement;
      activeImg: any;
      activeText: any;
      images: any;
      length: any;
      lastX: number;
      lastY: number;
      targetX: number;
      targetY: number;
      isMobile: boolean;
      halfWidth: number;
      halfHeight: number;
      zDistance: string;
      mouseWatched: any;
      animationRunning: any;
      animationStopped: any;
      inTransit: any;
      constructor(el) {
        const imgClass = (this.IMG_CLASS = 'slider__images-item');
        const textClass = (this.TEXT_CLASS = 'slider__text-item');
        const activeImgClass = (this.ACTIVE_IMG_CLASS = `${imgClass}--active`);
        const activeTextClass = (this.ACTIVE_TEXT_CLASS = `${textClass}--active`);

        this.el = el;
        this.contentEl = document.getElementById('slider-content');
        this.onMouseMove = this.onMouseMove.bind(this);

        // taking advantage of the live nature of 'getElement...' methods
        this.activeImg = el.getElementsByClassName(activeImgClass);
        this.activeText = el.getElementsByClassName(activeTextClass);
        this.images = el.getElementsByTagName('img');

        document
          .getElementById('slider-dots')
          .addEventListener('click', this.onDotClick.bind(this));

        document
          .getElementById('left')
          .addEventListener('click', this.next.bind(this));

        document
          .getElementById('right')
          .addEventListener('click', this.prev.bind(this));

        window.addEventListener('resize', this.onResize.bind(this));

        this.onResize();

        this.length = this.images.length;
        this.lastX = this.lastY = this.targetX = this.targetY = 0;
      }
      onResize() {
        const htmlStyles = getComputedStyle(document.documentElement);
        const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');

        const isMobile = (this.isMobile = matchMedia(
          `only screen and (max-width: ${mobileBreakpoint})`
        ).matches);

        this.halfWidth = innerWidth / 2;
        this.halfHeight = innerHeight / 2;
        this.zDistance = htmlStyles.getPropertyValue('--z-distance');

        if (!isMobile && !this.mouseWatched) {
          this.mouseWatched = true;
          this.el.addEventListener('mousemove', this.onMouseMove);
          this.el.style.setProperty(
            '--img-prev',
            `url(${this.images[+this.activeImg[0]['dataset']['id'] - 1].src})`
          );

          this.contentEl.style.setProperty(
            'transform',
            `translateZ(${this.zDistance})`
          );
        } else if (isMobile && this.mouseWatched) {
          this.mouseWatched = false;
          this.el.removeEventListener('mousemove', this.onMouseMove);
          this.contentEl.style.setProperty('transform', 'none');
        }
      }
      getMouseCoefficients({
        pageX,
        pageY,
      }: { pageX?: any; pageY?: any } = {}) {
        const halfWidth = this.halfWidth;
        const halfHeight = this.halfHeight;
        const xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
        const yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;

        return { xCoeff, yCoeff };
      }
      onMouseMove({ pageX, pageY }) {
        this.targetX = pageX;
        this.targetY = pageY;

        if (!this.animationRunning) {
          this.animationRunning = true;
          this.runAnimation();
        }
      }
      runAnimation() {
        if (this.animationStopped) {
          this.animationRunning = false;
          return;
        }

        const maxX = 10;
        const maxY = 10;

        const newPos = lerp(
          {
            x: this.lastX,
            y: this.lastY,
          },
          {
            x: this.targetX,
            y: this.targetY,
          }
        );

        const { xCoeff, yCoeff } = this.getMouseCoefficients({
          pageX: newPos.x,
          pageY: newPos.y,
        });

        this.lastX = newPos.x;
        this.lastY = newPos.y;

        this.positionImage({ xCoeff, yCoeff });

        this.contentEl.style.setProperty(
          'transform',
          `
          translateZ(${this.zDistance})
          rotateX(${maxY * yCoeff}deg)
          rotateY(${maxX * xCoeff}deg)
        `
        );

        if (this.reachedFinalPoint) {
          this.animationRunning = false;
        } else {
          requestAnimationFrame(this.runAnimation.bind(this));
        }
      }
      get reachedFinalPoint() {
        const lastX = ~~this.lastX;
        const lastY = ~~this.lastY;
        const targetX = this.targetX;
        const targetY = this.targetY;

        return (
          (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) &&
          (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY)
        );
      }
      positionImage({ xCoeff, yCoeff }) {
        const maxImgOffset = 1;
        const currentImage = this.activeImg[0].children[0];

        currentImage.style.setProperty(
          'transform',
          `
          translateX(${maxImgOffset * -xCoeff}em)
          translateY(${maxImgOffset * yCoeff}em)
        `
        );
      }
      onDotClick({ target }) {
        if (this.inTransit) return;

        const dot = target.closest('.slider__nav-dot');

        if (!dot) return;

        const nextId = dot['data-id'];

        const currentId = this.activeImg[0]['data-id'];

        if (currentId == nextId) return;

        this.startTransition(nextId);
      }
      transitionItem(nextId) {
        function onImageTransitionEnd(e) {
          e.stopPropagation();

          nextImg.classList.remove(transitClass);

          self.inTransit = false;

          this.className = imgClass;
          this.removeEventListener('transitionend', onImageTransitionEnd);
        }

        const self = this;
        const el = this.el;
        const currentImg = this.activeImg[0];
        const currentId = currentImg['data-id'];
        const imgClass = this.IMG_CLASS;
        const textClass = this.TEXT_CLASS;
        const activeImgClass = this.ACTIVE_IMG_CLASS;
        const activeTextClass = this.ACTIVE_TEXT_CLASS;
        const subActiveClass = `${imgClass}--subactive`;
        const transitClass = `${imgClass}--transit`;
        const nextImg = el.querySelector(`.${imgClass}[data-id='${nextId}']`);
        const nextText = el.querySelector(`.${textClass}[data-id='${nextId}']`);

        let outClass = '';
        let inClass = '';

        this.animationStopped = true;

        nextText.classList.add(activeTextClass);

        el.style.setProperty('--from-left', nextId);

        currentImg.classList.remove(activeImgClass);
        currentImg.classList.add(subActiveClass);

        if (currentId < nextId) {
          outClass = `${imgClass}--next`;
          inClass = `${imgClass}--prev`;
        } else {
          outClass = `${imgClass}--prev`;
          inClass = `${imgClass}--next`;
        }

        nextImg.classList.add(outClass);

        requestAnimationFrame(() => {
          nextImg.classList.add(transitClass, activeImgClass);
          nextImg.classList.remove(outClass);

          this.animationStopped = false;
          this.positionImage(this.getMouseCoefficients());

          currentImg.classList.add(transitClass, inClass);
          currentImg.addEventListener('transitionend', onImageTransitionEnd);
        });

        if (!this.isMobile) this.switchBackgroundImage(nextId);
      }
      startTransition(nextId) {
        function onTextTransitionEnd(e) {
          if (!e.pseudoElement) {
            e.stopPropagation();

            requestAnimationFrame(() => {
              self.transitionItem(nextId);
            });

            this.removeEventListener('transitionend', onTextTransitionEnd);
          }
        }

        if (this.inTransit) return;

        const activeText = this.activeText[0];
        const backwardsClass = `${this.TEXT_CLASS}--backwards`;
        const self = this;

        this.inTransit = true;

        activeText.classList.add(backwardsClass);
        activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
        activeText.addEventListener('transitionend', onTextTransitionEnd);

        requestAnimationFrame(() => {
          activeText.classList.remove(backwardsClass);
        });
      }
      next() {
        if (this.inTransit) return;

        let nextId = +this.activeImg[0]['dataset']['id'] + 1;

        if (nextId > this.length) nextId = 1;

        this.startTransition(nextId);

        setTimeout(() => {
          homeComponent.currentActiveNew = +this.activeImg[0]['dataset']['id'];
        }, 1000);
      }
      prev() {
        if (this.inTransit) return;

        let nextId = +this.activeImg[0]['dataset']['id'] - 1;

        if (nextId < 1) nextId = this.length;

        this.startTransition(nextId);

        setTimeout(() => {
          homeComponent.currentActiveNew = +this.activeImg[0]['dataset']['id'];
        }, 1000);
      }
      switchBackgroundImage(nextId) {
        function onBackgroundTransitionEnd(e) {
          if (e.target === this) {
            this.style.setProperty('--img-prev', imageUrl);
            this.classList.remove(bgClass);
            this.removeEventListener(
              'transitionend',
              onBackgroundTransitionEnd
            );
          }
        }

        const bgClass = 'slider--bg-next';
        const el = this.el;
        const imageUrl = `url(${this.images[+nextId - 1].src})`;

        el.style.setProperty('--img-next', imageUrl);
        el.addEventListener('transitionend', onBackgroundTransitionEnd);
        el.classList.add(bgClass);
      }
    }

    const sliderEl = homeComponent.slider.nativeElement;
    const slider = new Slider(sliderEl);
    setTimeout(() => {
      homeComponent.currentActiveNew = +slider.activeImg[0]['dataset']['id'];
    }, 1000);
    // ------------------ Demo stuff ------------------------ //

    let timer = 5000;
    let interval: any;

    function autoSlide() {
      interval = setInterval(() => {
        requestAnimationFrame(() => {
          slider.next();
        });
      }, timer);
    }

    function stopAutoSlide() {
      clearTimeout(interval);
    }

    sliderEl.onmouseenter = stopAutoSlide;
    sliderEl.onmouseleave = autoSlide;
    sliderEl.ontouchstart = stopAutoSlide;
    sliderEl.ontouchcancel = autoSlide;

    autoSlide();
  }

  navigateToNew(e: MouseEvent) {
    let newId = (e.target as HTMLDivElement).dataset['newid'];
    this.router.navigate(['school/news/']);
  }

  stopProbagation(e: MouseEvent) {
    e.stopPropagation();
  }

  // end of slider
  // end abdo code

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: 'fraction' };
    } else {
      this.pagination = false;
    }
  }
  slides = Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`);
  primary() {
    this.gradesService.changedId(1);
    this.router.navigate([`school/grades/home` + '/1']);
  }
  middle() {
    this.gradesService.changedId(2);
    this.router.navigate([`school/grades/home` + '/2']);
  }
  secondary() {
    this.gradesService.changedId(3);
    this.router.navigate([`school/grades/home` + '/3']);
  }
}
