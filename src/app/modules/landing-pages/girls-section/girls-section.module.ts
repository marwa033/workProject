import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { GirlsSectionRoutingModule } from './girls-section-routing.module';
import { GirlsSectionComponent } from './girls-section.component';
@NgModule({
  declarations: [GirlsSectionComponent],
  imports: [
    CommonModule,
    GirlsSectionRoutingModule,
    SharedModule],
})
export class GirlsSectionModule {}