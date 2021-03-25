import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GirlsSectionComponent } from './girls-section.component';

const routes: Routes = [
  {
    path: '',
    component: GirlsSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirlsSectionRoutingModule {}
