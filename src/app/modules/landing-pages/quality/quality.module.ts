
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { QualityRoutingModule } from './quality-routing.module';
import { QualityComponent } from './quality.component';
@NgModule({
  declarations: [QualityComponent],
  imports: [CommonModule, QualityRoutingModule, SharedModule],
})
export class QualityModule {}