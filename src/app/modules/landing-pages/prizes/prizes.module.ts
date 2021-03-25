import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PrizesRoutingModule } from './prizes-routing.module';
import { PrizesComponent } from './prizes.component';
@NgModule({
  declarations: [PrizesComponent],
  imports: [CommonModule, PrizesRoutingModule, SharedModule],
})
export class PrizesModule {}