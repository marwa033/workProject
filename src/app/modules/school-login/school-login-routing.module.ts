import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolLoginComponent } from './school-login.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolLoginComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'school',
        loadChildren: () =>
          import('src/app/modules/landing-pages/landing-pages.module').then(
            (m) => m.LandingPagesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolLoginRoutingModule {}
