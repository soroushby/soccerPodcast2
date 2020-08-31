import { EpisodeContentComponent } from './episode-content/episode-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodesComponent } from './episodes.component';
import { AddEpisodesComponent } from './add-episodes/add-episodes.component';
import { LoadEpisodesComponent } from './load-episodes/load-episodes.component';

const routes: Routes = [
  { path: '', component: EpisodesComponent },
  { path: 'addepisodes', component: AddEpisodesComponent },
  { path: 'loadepisodes', component: LoadEpisodesComponent },
  { path: 'episodecontent', component: EpisodeContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
