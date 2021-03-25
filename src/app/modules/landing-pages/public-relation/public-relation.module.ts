import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PublicRelationRoutingModule } from './public-relation-routing.module';
import { PublicRelationComponent } from './public-relation.component';
@NgModule({
  declarations: [PublicRelationComponent],
  imports: [CommonModule, PublicRelationRoutingModule, SharedModule],
})
export class PublicRelationModule {}