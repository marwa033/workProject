import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolHWRoutingModule } from './school-hw-routing.module';
import { SchoolHWComponent } from './school-hw.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [SchoolHWComponent],
  imports: [CommonModule, SchoolHWRoutingModule, SharedModule],
})
export class SchoolHWModule {}
