import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHonorBoardRoutingModule } from './all-honor-board-routing.module';
import { AllHonorBoardComponent } from './all-honor-board.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  declarations: [AllHonorBoardComponent],
  imports: [CommonModule, AllHonorBoardRoutingModule ,  SharedModule],
})
export class AllHonorBoardModule {}
