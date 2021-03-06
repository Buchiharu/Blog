import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards';
import { PostResolver } from './post/post-resolver.service';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feed',
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed').then((m) => m.FeedModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile').then((m) => m.ProfileModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./post').then((m) => m.PostModule),
        resolve: {
          post: PostResolver,
        },
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
