import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HonorBoardComponent } from './honor-board.component';

const routes: Routes = [
  {
    path: '',
    component: HonorBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HonorBoardRoutingModule {}
