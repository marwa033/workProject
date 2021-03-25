import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllNewsComponent } from './all-news.component';

const routes: Routes = [
  {
    path: '',
    component: AllNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllNewsRoutingModule {}
