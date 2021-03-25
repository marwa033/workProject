import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolLeadershipRoutingModule } from './school-leadership-routing.module';
import { SchoolLeadershipComponent } from './school-leadership.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [SchoolLeadershipComponent],
  imports: [CommonModule, SchoolLeadershipRoutingModule, SharedModule],
})
export class SchoolLeadershipModule {}
