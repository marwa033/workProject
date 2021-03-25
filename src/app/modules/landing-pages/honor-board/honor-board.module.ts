import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HonorBoardRoutingModule } from './honor-board-routing.module';
import { HonorBoardComponent } from './honor-board.component';
@NgModule({
  declarations: [HonorBoardComponent],
  imports: [
    CommonModule,
    HonorBoardRoutingModule,
    SharedModule],
})
export class HonorBoardModule {}