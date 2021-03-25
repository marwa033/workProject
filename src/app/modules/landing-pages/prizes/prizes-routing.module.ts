import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrizesComponent } from './prizes.component';

const routes: Routes = [
  {
    path: '',
    component: PrizesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrizesRoutingModule {}
