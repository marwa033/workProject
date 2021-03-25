import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SchoolLeadershipComponent } from './school-leadership.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolLeadershipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolLeadershipRoutingModule {}
