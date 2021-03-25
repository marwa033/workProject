import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/school-login/school-login.module').then(
        (m) => m.SchoolLoginModule
      ),
  },

  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,scrollPositionRestoration:'top' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
