import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,],
})
export class MaterialModule {}
