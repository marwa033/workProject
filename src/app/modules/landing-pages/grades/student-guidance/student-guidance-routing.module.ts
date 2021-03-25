import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentGuidanceComponent } from './student-guidance.component';

const routes: Routes = [
  {
    path: '',
    component: StudentGuidanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentGuidanceRoutingModule {}