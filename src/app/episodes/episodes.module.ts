import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    GridModule,
    AgGridModule.withComponents([]),
  ],
})
export class EpisodesModule {}
