import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentActivityComponent } from './student-activity.component';

const routes: Routes = [
  {
    path: '',
    component: StudentActivityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentActivityRoutingModule {}