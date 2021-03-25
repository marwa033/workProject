import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransportationComponent } from './transportation.component';

const routes: Routes = [
  {
    path: '',
    component: TransportationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationRoutingModule {}
