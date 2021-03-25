import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdmissionsComponent } from './admissions.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmissionsRoutingModule {}
