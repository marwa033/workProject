import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentGuidanceRoutingModule } from './student-guidance-routing.module';
import { StudentGuidanceComponent } from './student-guidance.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [StudentGuidanceComponent],
  imports: [CommonModule, StudentGuidanceRoutingModule, SharedModule],
})
export class StudentGuidanceModule {}
