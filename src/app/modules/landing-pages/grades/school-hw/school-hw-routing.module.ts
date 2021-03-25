import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SchoolHWComponent } from './school-hw.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolHWComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolHWRoutingModule {}
