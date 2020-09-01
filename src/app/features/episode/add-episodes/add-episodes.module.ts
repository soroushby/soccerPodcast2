import { AddEpisodesComponent } from './add-episodes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEpisodesRoutingModule } from './add-eposides-routing.module';
@NgModule({
  declarations: [AddEpisodesComponent],
  imports: [
    AddEpisodesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class AddEpisodesModule {}
