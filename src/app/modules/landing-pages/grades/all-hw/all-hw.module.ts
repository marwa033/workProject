import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllHwRoutingModule } from './all-hw-routing.module';
import { AllHwComponent } from './all-hw.component';

import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [AllHwComponent],
  imports: [CommonModule, AllHwRoutingModule, SharedModule],
})
export class AllHwModule {}
