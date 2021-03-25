import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicRelationComponent } from './public-relation.component';

const routes: Routes = [
  {
    path: '',
    component: PublicRelationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRelationRoutingModule {}
