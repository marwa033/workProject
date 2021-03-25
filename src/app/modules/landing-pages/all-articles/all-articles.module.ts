import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllArticlesRoutingModule } from './all-articles-routing.module';
import { AllArticlesComponent } from './all-articles.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [AllArticlesComponent],
  imports: [CommonModule, AllArticlesRoutingModule , SharedModule],
})
export class AllArticlesModule {}
