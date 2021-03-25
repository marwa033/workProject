import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QualityComponent } from './quality.component';

const routes: Routes = [
  {
    path: '',
    component: QualityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualityRoutingModule {}
