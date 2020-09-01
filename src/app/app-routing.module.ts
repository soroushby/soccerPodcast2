import { ProfileComponent } from './profile/profile.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./episodes/episodes.module').then((m) => m.EpisodesModule),
  },
  {
    path: 'loadepisodes',
    loadChildren: () =>
      import('./features/episode/load-episodes/load-episodes.module').then(
        (m) => m.LoadEpisodesModule
      ),
  },

  {
    path: 'addepisodes',
    loadChildren: () =>
      import('./features/episode/add-episodes/add-episodes.module').then(
        (m) => m.AddEpisodesModule
      ),
  },
  {
    path: 'episode',
    loadChildren: () =>
      import('./features/episode/episode-content/episode-content.module').then(
        (m) => m.EpisodeContentModule
      ),
  },
  { path: 'profile', component: ProfileComponent },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// {
//   path: 'profile',
//   loadChildren: () =>
//     import('./features/profile/profile.module').then((m) => m.ProfileModule),
// },
