import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPagesComponent } from './landing-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'admission',
        loadChildren: () =>
          import('./admissions/admissions.module').then(
            (m) => m.AdmissionsModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./gallery/gallery.module').then(
            (m) => m.GalleryModule
          ),
      },
      {
        path: 'allnews',
        loadChildren: () =>
          import('./all-news/all-news.module').then((m) => m.AllNewsModule),
      },
      {
        path: 'news/:id',
        loadChildren: () =>
          import('./news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'allboard',
        loadChildren: () =>
          import('./all-honor-board/all-honor-board.module').then(
            (m) => m.AllHonorBoardModule
          ),
      },
      {
        path: 'girls',
        loadChildren: () =>
          import('./girls-section/girls-section.module').then(
            (m) => m.GirlsSectionModule
          ),
      },
      {
        path: 'honor/:id',
        loadChildren: () =>
          import('./honor-board/honor-board.module').then(
            (m) => m.HonorBoardModule
          ),
      },
      {
        path: 'allarticles',
        loadChildren: () =>
          import('./all-articles/all-articles.module').then(
            (m) => m.AllArticlesModule
          ),
      },
      {
        path: 'article/:id',
        loadChildren: () =>
          import('./articles/articles.module').then((m) => m.ArticlesModule),
      },
      {
        path: 'prizes',
        loadChildren: () =>
          import('./prizes/prizes.module').then((m) => m.PrizesModule),
      },
      {
        path: 'quality',
        loadChildren: () =>
          import('./quality/quality.module').then((m) => m.QualityModule),
      },
      {
        path: 'public',
        loadChildren: () =>
          import('./public-relation/public-relation.module').then(
            (m) => m.PublicRelationModule
          ),
      },
      {
        path: 'contactUs',
        loadChildren: () =>
          import('./contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'grades',
        loadChildren: () =>
          import('./grades/grades.module').then((m) => m.GradesModule),
      },
      {
        path: 'transportation',
        loadChildren: () =>
          import('./transportation/transportation.module').then(
            (m) => m.TransportationModule
          ),
      },
      {
        path: 'supervision',
        loadChildren: () =>
          import('./supervision/supervision.module').then(
            (m) => m.SupervisionModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPagesRoutingModule {}
