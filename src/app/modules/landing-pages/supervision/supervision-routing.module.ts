import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SupervisionComponent } from './supervision.component';

const routes: Routes = [
  {
    path: '',
    component: SupervisionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisionRoutingModule {}
