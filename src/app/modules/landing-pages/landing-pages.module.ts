import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { LandingPagesComponent } from './landing-pages.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [LandingPagesComponent],
  imports: [CommonModule, LandingPagesRoutingModule, SharedModule],
})
export class LandingPagesModule {}
