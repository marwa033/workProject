
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SupervisionRoutingModule } from './supervision-routing.module';
import { SupervisionComponent } from './supervision.component';
@NgModule({
  declarations: [SupervisionComponent],
  imports: [CommonModule, SupervisionRoutingModule, SharedModule],
})
export class SupervisionModule {}