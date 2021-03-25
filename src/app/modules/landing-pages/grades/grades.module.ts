import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades.component';
import { RouterModule, Routes } from '@angular/router';
import { GradesRoutingModule } from './grades-routing.module';
@NgModule({
  declarations: [GradesComponent,],
  imports: [
    CommonModule,
    GradesRoutingModule,
    
  ],
  exports: [RouterModule]
})
export class GradesModule { }