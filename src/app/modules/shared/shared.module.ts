import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SvgLogoComponent } from './components/svg-logo/svg-logo.component';
import {
  NgbPaginationModule,
  NgbAccordionModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HeaderDiscriptionComponent } from './components/header-discription/header-discription.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SvgWaveComponent } from './components/svg-wave/svg-wave.component';

@NgModule({
  declarations: [
    SvgLogoComponent,
    SvgWaveComponent,
    PageHeaderComponent,
    HeaderDiscriptionComponent,
    PersonalInfoComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule,
    NgbPaginationModule,
    LightboxModule,
    MaterialModule,
    FormsModule,
    SwiperModule,
    NgbAccordionModule,
    NgbCarouselModule,
  ],
  exports: [
    GalleryModule,
    NgbPaginationModule,
    MaterialModule,
    LightboxModule,
    SvgWaveComponent,
    SvgLogoComponent,
    PageHeaderComponent,
    HeaderDiscriptionComponent,
    FormsModule,
    SwiperModule,
    NgbAccordionModule,
    NgbCarouselModule,
    PersonalInfoComponent,
  ],
})
export class SharedModule {}
