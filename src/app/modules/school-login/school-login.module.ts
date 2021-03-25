import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolLoginRoutingModule } from './school-login-routing.module';
import { SchoolLoginComponent } from './school-login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SchoolLoginComponent],
  imports: [CommonModule, SchoolLoginRoutingModule, SharedModule],
})
export class SchoolLoginModule {}
