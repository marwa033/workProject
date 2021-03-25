
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TransportationRoutingModule } from './transportation-routing.module';
import { TransportationComponent } from './transportation.component';
@NgModule({
  declarations: [TransportationComponent],
  imports: [CommonModule, TransportationRoutingModule, SharedModule],
})
export class TransportationModule {}