import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { GALLERY_CONFIG } from 'ng-gallery';
@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, 
    NewsRoutingModule,
     SharedModule
     ],
  providers: [
      {
        provide: GALLERY_CONFIG,
        useValue: {
          dots: true,
          imageSize: 'cover'
        }
      }
    ]
})
export class NewsModule {}