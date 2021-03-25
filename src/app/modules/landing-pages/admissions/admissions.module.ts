import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [AdmissionsComponent],
  imports: [CommonModule, AddmissionsRoutingModule , SharedModule],
})
export class AdmissionsModule {}
