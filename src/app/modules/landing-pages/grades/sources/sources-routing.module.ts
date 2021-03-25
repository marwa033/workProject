import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SourcesComponent } from './sources.component';

const routes: Routes = [
  {
    path: '',
    component: SourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourcesRoutingModule {}
