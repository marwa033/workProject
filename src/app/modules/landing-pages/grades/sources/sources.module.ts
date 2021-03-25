import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourcesRoutingModule } from './sources-routing.module';
import { SourcesComponent } from './sources.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [SourcesComponent],
  imports: [CommonModule, SourcesRoutingModule, SharedModule],
})
export class SourcesModule {}
