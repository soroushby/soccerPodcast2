import { EpisodeContentRoutingModule } from './episode-content-routing.module';
import { EpisodeContentComponent } from './episode-content.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EpisodeContentComponent],
  imports: [
    EpisodeContentRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class EpisodeContentModule {}
