import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNewsRoutingModule } from './all-news-routing.module';
import { AllNewsComponent } from './all-news.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [AllNewsComponent],
  imports: [CommonModule, AllNewsRoutingModule , SharedModule],
})
export class AllNewsModule {}