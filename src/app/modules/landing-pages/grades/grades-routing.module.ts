import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// const routes: Routes = [  
//   {
//     path: '/:id',
//     component:HomeComponent
// }  ,

//   {
//       path: 'leadership',
//       component:SchoolLeadershipComponent
//   },
//   {
//       path: 'activity',
//       component:StudentActivityComponent
//   },
//   {
//       path: 'guidance',
//       component:StudentGuidanceComponent
//   },
//   {
//       path: 'source',
//       component:SourcesComponent
//   },
//   {
//       path: 'schoolhw',
//       component:SchoolHWComponent
//   },
//   {  
//       path: 'leadership/:id',
//       component:SchoolLeadershipComponent
//   },
//   { 
//       path: 'allhw',
//       component:AllHwComponent
//   },
//   {
//       path: 'allgradesarticles',
//       component:AllArticlesComponent
//   },
  
// ];
const routes: Routes = [    
    {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(
            (m) => m.HomeModule
          ),
      },
    {
        path: 'leadership',
        loadChildren: () =>
          import('./school-leadership/school-leadership.module').then(
            (m) => m.SchoolLeadershipModule
          ),
    },
    {
        path: 'activity',
        loadChildren: () =>
          import('./student-activity/student-activity.module').then(
            (m) => m.StudentActivityModule
          ),
    },
    {
        path: 'guidance',
        loadChildren: () =>
          import('./student-guidance/student-guidance.module').then(
            (m) => m.StudentGuidanceModule
          ),
    },
    {
        path: 'source',
        loadChildren: () =>
          import('./sources/sources.module').then(
            (m) => m.SourcesModule
          ),
    },
    {
        path: 'schoolhw',
        loadChildren: () =>
          import('./school-hw/school-hw.module').then(
            (m) => m.SchoolHWModule
          ),
    }
    ,
    {  
        path: 'leadership/:id',
        loadChildren: () =>
          import('./school-leadership/school-leadership.module').then(
            (m) => m.SchoolLeadershipModule
          ),
    },
    { 
        path: 'allhw',
        loadChildren: () =>
      import('./all-hw/all-hw.module').then(
        (m) => m.AllHwModule
      ),
    }
    ,
    { 
        path: 'home/:id',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      ),
    }
    ,
    {
        path: 'allgradesarticles',
    loadChildren: () =>
      import('./all-articles/all-articles.module').then(
        (m) => m.AllArticlesModule
      ),
    }
    ,
    {
        path: 'home/:id',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      ),
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradesRoutingModule {
  
}