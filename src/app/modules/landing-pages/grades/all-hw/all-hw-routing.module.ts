import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllHwComponent } from './all-hw.component';

const routes: Routes = [
  {
    path: '',
    component: AllHwComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllHwRoutingModule {}
