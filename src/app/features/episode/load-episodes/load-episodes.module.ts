import { LoadEpisodeRoutingModule } from './load-episode-routing.module';
import { MaterialModule } from './../../../modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadEpisodesComponent } from './load-episodes.component';

@NgModule({
  declarations: [LoadEpisodesComponent],
  imports: [
    LoadEpisodeRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,

    AgGridModule.withComponents([]),
  ],
  exports: [LoadEpisodesComponent],
})
export class LoadEpisodesModule {}
