import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentActivityRoutingModule } from './student-activity-routing.module';
import { StudentActivityComponent } from './student-activity.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [StudentActivityComponent],
  imports: [CommonModule, StudentActivityRoutingModule, SharedModule],
})
export class StudentActivityModule {}
